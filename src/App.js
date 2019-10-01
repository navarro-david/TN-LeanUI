import React from 'react';
import logo from './logo.svg';
import Form from "react-jsonschema-form";
import './App.css';

const schema = require('./json/JSONschema.json')

const log = (type) => console.log.bind(console, type);

const handleOnSubmit = () => {
  log('Place API call here to push submitted data')
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Form schema={schema}
          onSubmit={() => this.handleOnSubmit()}
        />
      </header>
    </div>
  );
}

export default App;
