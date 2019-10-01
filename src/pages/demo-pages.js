import React, { useState } from "react";
import Form from "react-jsonschema-form";
import Grid from 'react-json-grid';
// import schema from '../jsonUI/organization/organization';

const JSONschema = require("../json/JSONschema.json");
const UIschema = require("../json/UIschema.json");

export const Index = () => {

    const data = [
        { 
            name: 'hello', 
            description: 'world',
            sapID: '100',
            salesforceID: '200',
            administrators: ['admin1', 'admin2'],
            active: true,
            fleets: 'fleet1',

        },
        
    ];

    return (
        <div>
            <h1>Index</h1>
            <p>Demo of react-router-dom</p>
            <p>Enter <code>http://localhost:3000/organization</code> into URL</p>
            <Grid 
                data={data}
                style={{color: 'black', width: '100%'}}
            />
        </div>
    );
};

export const Organization = () => {
    const handleOnSubmit = type => {
        console.log("Place API call here to push submitted data", type);
    };

    return (
        <div>
            <h1>Organization</h1>
            <p>Great! No if you go to <code>http://localhost:3000</code>, you should see the index page again</p>
            <Form
                schema={JSONschema}
                uiSchema={UIschema}
                onSubmit={type => handleOnSubmit(type)}
            />
        </div>
    );
};
