

import React from "react";

export default class AgentCard extends React.Component {
    render() {
        const
            props = this.props,
            cardData = props.data;

        return (
            <section className="agent-card flex border-box card" ref={node => { this.ref = node; }}>
                <div className="avatar-container flex flex-center">
                    <i className="sp-icon icon-windows" />
                </div>
                <div className="detail flex">
                    <div className="msg-row flex border-box">
                        <span className="agent-name flex">
                            <i className="icon-desktop icon" />
                            <span className="ellipsis">{ cardData.name }</span>
                        </span>
                        <i className={`${cardData.status}-badge badge`} />
                        <span className="flex ip" title={cardData.ip}>
                            <i className="icon-info icon" />
                            { cardData.ip }
                        </span>
                        <span className="flex folder" title={cardData.location} >
                            <i className="icon-folder icon" />
                            <span className="ellipsis">{ cardData.location }</span>
                        </span>
                    </div>
                    <div className="operate-row flex">
                        <i 
                            className="icon-plus transition-el hard-btn blue-btn"
                            onClick={e => this.handleAddClick(cardData, e)}
                        />
                        <ul className="flex">
                            {
                                cardData.resources.map((browser, key) => (
                                    <li key={key} className="browser-item transition-el hard-btn gray-btn flex">
                                        {browser}
                                        <i className="icon-trash" />
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
    
    handleAddClick = (data, e) => {   
        const
            showUp = (document.body.clientHeight - e.nativeEvent.pageY) < 190; // 计算下方是否有足够空间展开弹窗        

        this.props.addCall({
            card: data,
            ref: this.ref,
            showUp
        });
    }
}