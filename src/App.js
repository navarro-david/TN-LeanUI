import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import * as Page from './pages/demo-pages'

import "./App.css";



const App = () => {
    

    return (
      <Router>
        <div className="App">
            <header className="App-header">
                <div>
                    <Switch>
                        <Route path="/" exact component={Page.Index} />
                        <Route
                            path="/organization"
                            component={Page.Organization}
                        />
                    </Switch>
                </div>
                {/* <Form
                    schema={JSONschema}
                    uiSchema={UIschema}
                    onSubmit={type => handleOnSubmit(type)}
                /> */}
            </header>
        </div>
      </Router>
    );
};

export default App;
