

import "./index.less";
import React from "react";

import routes from "@/common/routes";
import { Link } from "react-router-dom";

export default class Asider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            menuList: [
                { name: "agent", icon: "sitemap" },
                { name: "my cruise", icon: "boat" },
                { name: "help", icon: "life-bouy" }
            ],
            historyList: [
                { 
                    deployer: "bjstdmngbdr01.thoughtworks.com", 
                    ip: "192.168.1.80",
                    comment: "Acceptance_test_blabla"
                },
                { 
                    deployer: "bjstdmngbdr02.thoughtworks.com", 
                    ip: "192.168.1.80",
                    comment: "Acceptance_test_blabla"
                },                
                { 
                    deployer: "bjstdmngbdr03.thoughtworks.com", 
                    ip: "192.168.1.80",
                    comment: "Acceptance_test_blabla"
                }
            ],
            currentMenu: 0
        };
    }  

    render() {
        const 
            state = this.state;

        return (
            <aside className="asider">
                <ul className="menu-list">
                    <li className="title-item">
                        <i className="menu-icon icon-dashboard" />
                        DASHBOARD
                    </li>
                    {
                        routes.map((menu, key) => (
                            <li onClick={e => this.setState({ currentMenu: key })} key={key}>
                                <Link
                                    className={`menu-item transition-el ${key === state.currentMenu ? "item-active" : ""}`} 
                                    to={menu.path} >
                                    <i className={`menu-icon transition-el ${menu.icon ? "icon-" + menu.icon : ""}`} />
                                    { menu.name.toLocaleUpperCase() }
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <ul className="history-list menu-list">
                    <li className="title-item">
                        History
                    </li>
                    {
                        state.historyList.map((history, key) => (
                            <li className="history-item" key={key}>
                                <div title={`${history.deployer.split(".")[0]}/${history.ip}/${history.comment}`} className="ellipsis">
                                    { `${history.deployer.split(".")[0]}/${history.ip}/${history.comment}` }
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </aside>
        );
    }
}
