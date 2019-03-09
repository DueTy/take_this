

import React from "react";

import Agents from "@/components/agents";

export default class MainContainer extends React.Component {
    render() {
        return (
            <section className="main-container flex border-box">
                <Agents />
            </section>
        );
    }
}