import React from "react";
import {Switch,Route} from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Following from "./Following";
import Answer from "./Answer";
import Spaces from "./Spaces";

const Index = () => {

    return (
        <span>
            <Header></Header>
            <Switch>
                <Route path="/following">
                    <Following />
                </Route>
                <Route path="/answer">
                    <Answer />
                </Route>
                <Route path="/spaces">
                    <Spaces />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </span>
    )
}

export default Index;