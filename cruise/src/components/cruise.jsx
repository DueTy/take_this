import React from "react";

import Header from "./header";
import Asider from "./asider";
import MainContainer from "./main-container";


export default class extends React.Component {
    render() {
        return (
            <div className="main flex">
                <Header />
                <section className="main-section flex">
                    <Asider />
                    <MainContainer />
                </section>
                <footer className="footer">
                    © Copyright 2017 <span style={{ fontWeight: "bold" }}>Thought</span>Works
                </footer>
            </div>
        );
    }
}