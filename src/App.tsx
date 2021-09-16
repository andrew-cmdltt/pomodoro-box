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
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {DeleteModal} from "./components/DeleteModal";
import {StatisticPage} from "./components/StatisticPage";

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
))

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>

                <Layout>
                    <Header/>
                    <Content>
                        <Switch>
                            <Route exact path="/">
                                <PomodoroPage/>
                            </Route>
                            <Route exact path="/statistic">
                                <StatisticPage/>
                            </Route>
                            <Route path="/delete/:id">
                                <PomodoroPage/>
                                <DeleteModal/>
                            </Route>
                        </Switch>
                    </Content>
                </Layout>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
