/*
 * @Author: DueTy.du 
 * @Date: 2018-08-13 22:51:10 *
*/
import "./index.less";
import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "@/reducers";
const store = createStore(reducers);

import PageView from "./components/cruise";

const render = Component => {
    ReactDOM.render(
        (
            <Provider store={store}>
                <Component />
            </Provider>
        ),
        document.getElementById("app")
    );
};

render(PageView);