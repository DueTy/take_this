import React from "react";

import Header from "./header";
import Asider from "./asider";
// import MainContainer from "./main-container";
import routes from "@/common/routes";
import { HashRouter as Router, Route, Redirect } from "react-router-dom";

export default class extends React.Component {
    render() {
        return (
            <Router>
                <div className="main flex">
                    <Header />
                    <section className="main-section flex">
                        <Asider />
                        <section className="main-container flex border-box">
                            <Route exact path="/" render={() => <Redirect to="/app/agent" />} />
                            {
                                routes.map(({path, component, props, name}) => (
                                    <Route 
                                        exact
                                        key={name}
                                        path={path}
                                        store={this.props.store}
                                        component={component}
                                        {...props}
                                    />
                                ))
                            }
                        </section>
                        {/* <MainContainer /> */}
                    </section>
                    <footer className="footer">
                        © Copyright 2017 <span style={{ fontWeight: "bold" }}>Thought</span>Works
                    </footer>
                </div>
            </Router>
        );
    }
}