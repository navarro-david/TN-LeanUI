import React, { useState } from "react";
import Form from "react-jsonschema-form";

import OrgGrid from '../components/OrganizationGrid'

// import schema from '../jsonUI/organization/organization';

const JSONschema = require("../jsonUI/organization/JSONSchema.json");
const UIschema = require("../json/UIschema.json");

export const Index = () => {
    const data = [
        {
            name: "ACME Fleet",
            description: "ACME's Fleet",
            sapId: "SAP2323455",
            salesforceId: "SFID344",
            address: {
                addressLine1: "244 Acme Dr",
                addressLine2: "Suite 3",
                city: "Pleasanton",
                state: "CA",
                country: "USA"
            }
        },
        {
            name: "Marvel Fleet 2",
            description: "Marvel's Fleet",
            sapId: "SAP223433455",
            salesforceId: "SFID344533",
            address: {
                addressLine1: "244 Acme Dr",
                addressLine2: "Suite 3",
                city: "Pleasanton",
                state: "CA",
                country: "USA"
            }
        },
    ];

    return (
        <div>
            <h1>Index</h1>
            <p>Demo of react-router-dom</p>
            <p>
                Enter <code>http://localhost:3000/organization</code> into URL
            </p>
            <OrgGrid data={data} />
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
            <p>
                Great! Now if you go to <code>http://localhost:3000</code>, you
                should see the index page again
            </p>
            <Form
                schema={JSONschema}
                uiSchema={UIschema}
                onSubmit={type => handleOnSubmit(type)}
            />
        </div>
    );
};
