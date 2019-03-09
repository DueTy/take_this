

import "./index.less";
import "@/assets/os icons/index.css";
import React from "react";

import StatusHeader from "./status-header";
// import CtrlBar from "./ctrl-bar";
import AgentCard from "./agent-card";
import Popover from "./popover";
import ResourceAddForm from "./resource-add-form";


export default class Agents extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            agentList: [
                {
                    "name": "bjstdmngbdr08.thoughtworks.com",
                    "os": "windows",
                    "status": "building",
                    "type": "virtual",
                    "ip": "192.168.1.80",
                    "location": "/var/lib/cruise-agent",
                    "resources": [
                        "Firefox",
                        "Safari",
                        "Ubuntu",
                        "Chrome"
                    ],
                    "id": 2
                },
                {                    
                    "name": "bjstdmngbdr15.thoughtworks.com",
                    "os": "suse",
                    "status": "idle",
                    "type": "physical",
                    "ip": "192.168.1.110",
                    "location": "/var/lib/cruise-agent",
                    "resources": [],
                    "id": 5
                }
            ],
            addPopShow: false,
            popoverProps: {
                style: {
                    left: -600,
                    top: -600
                },
                target: document.body
            }
        };
    }

    render() {
        const
            state = this.state;

        return (
            <section className="agents">
                <StatusHeader />
                {/* <CtrlBar /> */}
                <div ref={node => { this.agentListContainer = node; }}>
                    {
                        state.agentList.map((agent, key) => (
                            <AgentCard key={key} data={agent} addCall={this.handleCardAddClick} />
                        ))
                    }
                </div>
                <Popover visible={state.addPopShow} {...state.popoverProps} >
                    <ResourceAddForm 
                        addCall={this.handlePopConfirmClick}
                        cancelCall={() => this.setState({ addPopShow: false })}
                    />
                </Popover>
            </section>
        );
    }

    handleCardAddClick = data => {

        this.setState({
            addPopShow: true,
            
            popoverProps: {
                style: {
                    left: 111,
                    top: 111
                },
                target: data.ref
            }
        });
    }

    handlePopConfirmClick = value => {
        
    }
}