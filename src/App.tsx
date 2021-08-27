import React from 'react';
import {Layout} from "./components/Layout";
import "./main.global.css"
import {Header} from "./components/Header";
import {Content} from "./components/Content";
import {PomodoroPage} from "./components/PomodoroPage";

function App() {
    return (
        <Layout>
            <Header/>
            <Content>
                <PomodoroPage />
            </Content>
        </Layout>
    );
}

export default App;
