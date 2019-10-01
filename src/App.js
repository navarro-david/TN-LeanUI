import React from 'react';
import logo from './logo.svg';
import Form from "react-jsonschema-form";
import './App.css';

const schema = require('./json/schema.json')

const log = (type) => console.log.bind(console, type);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Form schema={schema}
          onChange={log("changed")}
          onSubmit={log("submitted")}
          onError={log("errors")} />
      </header>
    </div>
  );
}

export default App;
