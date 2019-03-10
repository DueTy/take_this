

import React from "react";

import api from "@/common/api/agent";
import { debounce } from "@/common/utils";

export default class ResourceAddForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: "",
            error: false,
            errorTip: ""
        };
    }
    
    render() {
        const
            state = this.state,
            props = this.props;

        return (
            <form className={"agent-add-form border-box " + 
                `${props.showUp ? "show-up" : ""}`
            }>
                <i className="triangle" />
                <i className="icon-close transition-el" onClick={this.handleCancelClick} />
                <p>Separate multiple resource name with commas</p>
                <div className="ipt-ctrl">
                    <input onChange={e => this.handleIpt(e.target.value)} type="text" className="name-ipt" />
                    {
                        state.error && <p className="error-tip">{state.errorTip}</p>
                    }
                </div>
                <div className="flex">
                    <div 
                        onClick={this.handleConfirmClick} 
                        className="transition-el hard-btn blue-btn">Add Resources</div>
                    <div 
                        onClick={this.handleCancelClick}
                        style={{ marginLeft: 20 }} 
                        className="transition-el hard-btn dark-btn">Cancel</div>
                </div>                
            </form>
        );
    }

    validate = call => {
        this.state.inputValue ? 
            this.setState({ error: false, errorTip: "" }, call ? () => call() : undefined) :
            this.setState({ error: true, errorTip: "Please input resource name" });
    }

    handleIpt = debounce(inputValue => {

        this.setState({ inputValue }, () => this.validate());
    }, 500);

    handleConfirmClick = () => {

        this.validate(() => {
            const
                data = this.props.cardData,
                inputValue = this.state.inputValue;

            if (inputValue.split(",").length) {
                data.resources = [ ...data.resources, ...inputValue.split(",") ];
            } else {
                data.resources.push(this.state.inputValue);
            }
            
            api.putAgent({ data, id: data.id }).then(() => {
                this.handleCancelClick();
            });
        });
    }

    handleCancelClick = () => {
        
        this.setState({
            error: false,
            errorTip: "",
            inputValue: ""
        }, () => this.props.cancelCall());
    }
}