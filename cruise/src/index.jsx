/*
 * @Author: DueTy.du 
 * @Date: 2018-08-13 22:51:10 *
*/
import "./reset.less";
import "./index.less";
import "./assets/font icons/fonts.css";
import React from "react";
import ReactDOM from "react-dom";

// import { Provider } from "react-redux";
// import { createStore } from "redux";
// import reducers from "@/reducers";
// const store = createStore(reducers);

import PageView from "./components/cruise";

const render = Component => {
    ReactDOM.render(
        (
            // <Provider store={store}>
            <Component />
            // </Provider>
        ),
        document.getElementById("app")
    );
};

if (module.hot) {
    module.hot.accept(() => {
        console.log("hot render");
        render(PageView);
    });
}

render(PageView);