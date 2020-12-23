import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SubPage from "./pages/SubPage";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <MainPage />
                </Route>
                <Route path="/kontakt">
                    <SubPage />
                </Route>
                <Route path="/log">
                    <SubPage />
                </Route>
                <Route path="/sign">
                    <SubPage />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;