import React from 'react';
import {Layout} from "./components/Layout";
import "./main.global.css"
import {Header} from "./components/Header";
import {Content} from "./components/Content";
import {PomodoroPage} from "./components/PomodoroPage";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./store/reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";


const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
))

function App() {

    return (
        <Provider store={store}>
            <Layout>
                <Header/>
                <Content>
                    <PomodoroPage/>
                </Content>
            </Layout>
        </Provider>
    );
}

export default App;
