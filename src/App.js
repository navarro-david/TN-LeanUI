import React from 'react';
import logo from './logo.svg';
import Form from "react-jsonschema-form";
import './App.css';

const JSONschema = require('./json/JSONschema.json')
const UIschema = require('./json/UIschema.json')


const App = () => {

  const handleOnSubmit = (type) => {
    console.log('Place API call here to push submitted data', type);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Form 
          schema={JSONschema}
          uiSchema={UIschema}
          onSubmit={(type) => handleOnSubmit(type)}
        />
      </header>
    </div>
  );
}

export default App;
