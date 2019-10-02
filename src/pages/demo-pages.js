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
    const url = 'http://api.inno191.com/api/organization';
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    async function fetchUrl() {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
      setLoading(false);
    }
    useEffect(() => {
      fetchUrl();
    }, []);

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

export const EditOrganization = withRouter(({match, location, history}) => {
    const orgName = match.params.orgName;
    const orgId = location.state.organizationId;
    const [formData, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isSending, setIsSending] = useState(false);

    const url = 'http://api.inno191.com/api/organization';
    const geturl = `http://api.inno191.com/api/organization/${orgId}`; // Now the id is not hardcoded

    async function fetchDataFromUrl() {
        console.log("fetchDataFromUrl Called");
        const response = await fetch(geturl);
        const json = await response.json();
        setData(json)
        setLoading(false);
    }

    useEffect(() => {
        fetchDataFromUrl();
    }, []);

    const handleOnSubmit = type => {        
        if(isSending) return;
        setIsSending(true);      
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(type.formData)
        }).then(() => {
            setIsSending(false)
            history.push('/')          
        });
    };   

    return (
        <div>
            <h1>{orgName}</h1>
            <div style={{
                width: '50%'
            }}>
                <Form
                    schema={EditOrgSchema}
                    uiSchema={UIschema}
                    onSubmit={type => handleOnSubmit(type)}
                    formData={formData}
                />
            </div>
        </div>
    );
});

export const AddOrganization = withRouter(({history}) => {
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
            history.push('/') // Use this method to go to index page
        }, 5000)
    };

    return (
        <div>
            <div style={{width: '50%'}}>
                <Form
                    schema={AddOrgSchema}
                    uiSchema={UIschema}
                    onSubmit={type => handleOnSubmit(type)}
                />
            </div>
        </div>
    );
});