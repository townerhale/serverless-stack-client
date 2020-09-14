import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";

//This component uses the Switch compnent from React-Router that rendsers
//the first matching route that is defined within.
export default function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            {/* call all umatched routes*/}
            <Route>
                <NotFound />
            </Route>
        </Switch>
    );
}