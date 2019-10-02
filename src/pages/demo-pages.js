import React, { useState, useEffect } from "react";
import { withRouter } from 'react-router-dom';
import Form from "react-jsonschema-form";
import Button from '@material-ui/core/Button';

import OrgGrid from '../components/OrganizationGrid'


// import schema from '../jsonUI/organization/organization';

const JSONschema = require("../jsonUI/organization/JSONSchema.json");
const UIschema = require("../json/UIschema.json");

const AddOrgSchema = require('../jsonUI/organization/AddOrgSchema.json')
const EditOrgSchema = require('../jsonUI/organization/EditOrgSchema.json')

export const Index = withRouter(({ history }) => {

    // const url = 'http://pf0i78px/api/organization';

    // const [data, setData] = useState([]);
    // const [loading, setLoading] = useState(true);
    // async function fetchUrl() {
    //   const response = await fetch(url);
    //   const json = await response.json();
    //   setData(json);
    //   setLoading(false);
    // }
    // useEffect(() => {
    //   fetchUrl();
    // }, []);

    // Dummy Data
    const data = [
        {
            name: "ACME Fleet",
            description: "ACME's Fleet",
            id: 'fleet001',
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
            id: 'fleet002',
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
                <Button
                    onClick={() => history.push('/add-organization')}
                >
                    Add Organization
                </Button>
            </div>
        </div>
    );
})

export const EditOrganization = ({match, location}) => {
    const orgName = match.params.orgName;
    const orgId = location.state.id ? location.state.id : null;
    console.log('test', location)
    const [isSending, setIsSending] = useState(false)

    // Place API call to add to API here
    const handleOnSubmit = type => {
        console.log("Place API call here to push submitted data", type);
        if(isSending) return;
        setIsSending(true)

        // Dummy code
        console.log('fetching from API...')
        setTimeout(() => {
            console.log('done fetching from API!')
            setIsSending(false)
        }, 5000)
    };

    return (
        <div>
            <h1>Edit {orgName}</h1>
            {orgId && <h2>id: {orgId}</h2>}
            <Form
                schema={EditOrgSchema}
                uiSchema={UIschema}
                onSubmit={type => handleOnSubmit(type)}
            />
        </div>
    );
};

export const AddOrganization = () => {
    
    const [isSending, setIsSending] = useState(false)

    // Place API call to add to API here
    const handleOnSubmit = type => {
        console.log("Place API call here to push submitted data", type);
        if(isSending) return;
        setIsSending(true)

        // Dummy code
        console.log('fetching from API...')
        setTimeout(() => {
            console.log('done fetching from API!')
            setIsSending(false)
        }, 5000)
    };

    return (
        <div>
            <Form
                schema={AddOrgSchema}
                uiSchema={UIschema}
                onSubmit={type => handleOnSubmit(type)}
            />
        </div>
    );
};
