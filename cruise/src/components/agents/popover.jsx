

import React from "react";
import ReactDOM from "react-dom";

export default class Popover extends React.Component {
    
    constructor(props) {
        super(props);

        this.container = null;
    }

    componentDidMount() {
        this.container = document.createElement("div");
        this.props.visible && this.props.target.appendChild(this.container);

        this.renderPopover();
    }

    componentDidUpdate() {
        if (this.props.visible) {
            this.props.target.appendChild(this.container);
            this.renderPopover();
        } else {
            this.container.parentNode.removeChild(this.container);
        }
    }

    onOk = () => {
        const { onOk } = this.props;        
        (onOk instanceof Function) && onOk();
    }

    onCancel = () => {
        const { onCancel } = this.props;        
        (onCancel instanceof Function) && oncancel();
    }

    renderPopover() {
        const
            props = this.props,
            style = props.style;

        const dom  = (
            <div className="popover" style={style}>
                {this.props.children}
            </div>
        );

        ReactDOM.render(dom, this.container);
    }

    render() {
        return null;
    }
}