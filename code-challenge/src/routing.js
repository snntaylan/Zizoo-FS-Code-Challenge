import React from 'react';
import Search from "./components/search";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Search from "./src/components/search";
import Notfound from "./components/404";
import App from "./App";

export const routing = (
    <Router>
        <div>
            <Route path="/" exact component={App} />
            <Route path="/search" component={Search} />
            <Switch>
                <Route path='/404' exact component={Notfound} />
            </Switch>
        </div>
    </Router>
);