
import "./index.less";
import React from "react";

import siteLogo from "@/assets/logo/logo.svg";
import avatar from "@/assets/logo/avatar.jpg";

export default class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="header-wrap flex">
                    <img className="logo" src={siteLogo} width={100} />
                    <a href="javascript: void(0);" className="profile">
                        <img className="avatar" src={avatar} />
                    </a>
                </div>
            </header>
        );
    }
}