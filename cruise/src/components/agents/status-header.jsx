

import React from "react";

export default class StatusHeader extends React.Component {
    render() {
        return (
            <ul className="flex">
                <li className="status-blk building-blk">
                    <div className="icon-cog float-el bg-el" />
                    <span className="blk-name float-el">
                        Building
                    </span>
                    <span className="counter float-el">
                        3
                    </span>
                </li>
                <li className="status-blk idle-blk">
                    <div className="icon-coffee float-el bg-el" />
                    <span className="blk-name float-el">
                        Idle
                    </span>
                    <span className="counter float-el">
                        5
                    </span>
                </li>
                <li className="status-blk msg-blk">
                    <ul className="flex">
                        <li className="agent-type-item flex">
                            <p className="item-title flex flex-center">
                                ALL
                            </p>
                            <p className="item-value flex flex-center">
                                8
                            </p>
                        </li>
                        <li className="agent-type-item flex">
                            <p className="item-title flex flex-center">
                                PHYSICAL
                            </p>
                            <p className="item-value flex flex-center">
                                4
                            </p>
                        </li>
                        <li className="agent-type-item flex">
                            <p className="item-title flex flex-center">
                                VIRTUAL
                            </p>
                            <p className="item-value flex flex-center">
                                4
                            </p>
                        </li>
                    </ul>
                </li>
            </ul>
        );
    }  
}