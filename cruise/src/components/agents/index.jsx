

import "./index.less";
import "@/assets/os icons/index.css";
import React from "react";

import StatusHeader from "./status-header";
import CtrlBar from "./ctrl-bar";
import AgentCard from "./agent-card";
import Popover from "@/components/popover";
import ResourceAddForm from "./resource-add-form";

import api from "@/common/api/agent";


export default class Agents extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            agentList: [],
            addPopShow: false,
            popoverProps: {
                style: {
                    left: -600,
                    top: -600
                },
                target: null,
                showUp: false,
                currentData: null
            },
            fetchedData: null
        };
    }

    render() {
        const
            state = this.state;

        return (
            <section className="agents">
                <StatusHeader />
                <CtrlBar typeChangeCall={this.handleTypeChange} searchCall={this.handleSearch} />
                <div ref={node => { this.agentListContainer = node; }}>
                    {
                        state.agentList.map((agent, key) => (
                            <AgentCard key={key} data={agent} addCall={this.handleCardAddClick} />
                        ))
                    }
                </div>
                <Popover visible={state.addPopShow} {...state.popoverProps} >
                    <ResourceAddForm 
                        cardData={state.popoverProps.currentData}
                        showUp={state.popoverProps.showUp}
                        addCall={this.handlePopConfirmClick}
                        cancelCall={() => this.setState({ addPopShow: false })}
                    />
                </Popover>
            </section>
        );
    }

    componentDidMount() {   
        api.getAgents().then(fetchedData => {
            this.setState({ fetchedData }, () => this.handleTypeChange("all"));
        });
    }

    handleCardAddClick = data => {

        const
            style = data.showUp ?  
                { left: 111, top: -111 } : 
                { left: 111, top: 111 }; // 计算pop出现位置

        this.setState({
            addPopShow: true,
            popoverProps: {
                style,
                target: data.ref,
                showUp: data.showUp,
                currentData: data.card
            }
        });
    }

    handleSearch = data => {
        if (!data) {
            this.setState({ agentList: this.state.fetchedData });
        }
        this.setState({ agentList: [ data ] });
    }

    handleTypeChange = type => {
        const
            fetchedData = this.state.fetchedData,
            agentList = type === "all" ? fetchedData : fetchedData.filter(item => item.type === type);
        
        this.setState({ agentList });
    }
}