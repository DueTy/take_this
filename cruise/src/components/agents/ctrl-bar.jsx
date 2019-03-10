

import React from "react";

import { debounce } from "@/common/utils/";
import api from "@/common/api/agent";

export default class CtrlBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            tabs: [
                { name: "all" },
                { name: "physical" },
                { name: "virtual" }
            ],
            currentType: "all",
            layouts: [
                { icon: "th-card", name: "card-layout" },
                { icon: "th-list", name: "list-layout" }
            ],
            currentLayout: "card-layout",
            searchValue: ""
        };
    }
    render() {
        const
            state = this.state;

        return (
            <section className="flex card">
                <ul className="type-tab-list flex">
                    {
                        state.tabs.map((type, key) => (
                            <li 
                                onClick={() => this.handleTypeChange(type.name)}
                                key={key} 
                                className={
                                    "type-tab-btn border-box transition-el " + 
                                    `${state.currentType === type.name ? "tab-active" : ""}`
                                }>
                                { type.name.toLocaleUpperCase() }
                            </li>
                        ))
                    }
                </ul>
                <div className="search-ctrl flex">
                    <i className="icon-search" onClick={this.handleSeachClick} />
                    <input onChange={e => this.handleSearchChange(e.target.value)} type="text" className="search-ipt" />
                </div>
                <div className="layout-ctrl flex">
                    {
                        state.layouts.map((layout, key) => (
                            <div 
                                onClick={() => this.setState({ currentLayout: layout.name })}
                                key={key}
                                className={
                                    "layout-item flex flex-center transition-el " + 
                                    `${state.currentLayout === layout.name ? "tab-active" : ""}`
                                }
                                title={layout.name}>
                                <i className={`icon-${layout.icon}`} />
                            </div>
                        ))
                    }
                </div>
            </section>
        );
    }

    handleSearchChange = debounce(searchValue => {
        this.setState({ searchValue });
    }, 500)

    handleSeachClick = () => {
        const
            id = this.state.searchValue;

        if (!id) {
            this.searchCall(false);
            return;
        }

        api.searchAgent({ id }).then(res => {
            this.props.searchCall(res);
        });
    }

    handleTypeChange = type => {
        this.setState({ currentType: type }, () => this.props.typeChangeCall(type));
    }
}