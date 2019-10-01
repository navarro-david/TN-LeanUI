import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import * as Page from "./pages/demo-pages";

import "./App.css";

const App = () => {
    return (
        <Router>
          <div className="App">
            <Switch>
                <Route path="/" exact component={Page.Index} />
                <Route path="/organization" component={Page.Organization} />
            </Switch>
          </div>
        </Router>
    );
};

export default App;
