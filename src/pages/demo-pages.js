import React, { useState } from "react";
import Form from "react-jsonschema-form";
import Button from '@material-ui/core/Button';

import OrgGrid from '../components/OrganizationGrid'
import { flexbox } from "@material-ui/system";

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
            <h1>Organizations</h1>
            <p>Modify or add new Organizations</p>
            <OrgGrid data={data} />
            <div style={{
                display: 'flex',
                width: '100%',
                flexDirection: 'row-reverse',
                padding: '1rem'
            }}>
                <Button>Add Organization</Button>
            </div>
        </div>
    );
};

export const EditOrganization = () => {
    const handleOnSubmit = type => {
        console.log("Place API call here to push submitted data", type);
    };

    return (
        <div>
            <h1>Edit</h1>
            <Form
                schema={JSONschema}
                uiSchema={UIschema}
                onSubmit={type => handleOnSubmit(type)}
            />
        </div>
    );
};
