import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RecoilRoot } from "recoil";
import Counter from "./components/Counter";
import { configureStore, createStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { todoReducer, todoReducer02 } from "./state/todos_redux";
import todoReducer03 from "./state/todos_redux";
import { countReducer, countReducer02 } from "./state/counter";
import countReducer03 from "./state/counter";
import "./utils/lang/index";

const root = ReactDOM.createRoot(document.getElementById("root"));

//const store = createStore();
const store = configureStore({
  reducer: {
    //counter: countReducer,
    //counter: countReducer02,
    counter: countReducer03,
    //todos: todoReducer,
    //todos: todoReducer02,
    todos: todoReducer03,
  },
});

root.render(
  <Provider store={store}>
    <Counter />
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
