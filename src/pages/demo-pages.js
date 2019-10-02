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

    //Dummy Data
    const data1 = [
        {
            name: "ACME Fleet",
            organizationId: "90111EA7-694E-4730-979D-2289FA49555F",
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
            organizationId: "90111EA7-694E-4730-979D-2289FA49555F",
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
            <OrgGrid data={data1} />
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

export const EditOrganization = ({match, location}, props) => {
    const orgName = match.params.orgName;
    const orgId = location.state.organizationId;
    const [formData, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const url = 'http://api.inno191.com/api/organization';
    // const geturl = 'http://api.inno191.com/api/organization/90111EA7-694E-4730-979D-2289FA49555F'; //TODO: id hardcoded
    const geturl = `http://api.inno191.com/api/organization/${orgId}`; //TODO: id hardcoded ()
    const [isSending, setIsSending] = useState(false);

    async function fetchDataFromUrl() {
        console.log("fetchDataFromUrl Called");
        const response = await fetch(geturl);
        const json = await response.json();
        setData(json)
        setLoading(false);
    }

    useEffect(() => {
        fetchDataFromUrl();
        // Just a test since I (David) can't connect to server
        // const json = {//TODO: get data from form
        //     organizationId: "90111EA7-694E-4730-979D-2289FA49555F",
        //     name: "ACME Fleet 3",
        //     description: "ACME's Fleet",
        //     sapId: "SAP2323455",
        //     salesforceId: "SFID344",
        //     address: {
        //         addressLine1: "244 Acme Dr",
        //         addressLine2: "Suite 3",
        //         city: "Pleasanton",
        //         state: "CA",
        //         country: "USA"
        //     }
        // }
        // setData(json);
        // console.log('formData', formData)
    }, []);

    // Place API call to add to API here
    const handleOnSubmit = type => {
        const orgData = {//TODO: get data from form
            organizationId: "90111EA7-694E-4730-979D-2289FA49555F",
            name: "ACME Fleet 3",
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
        };

        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orgData)
        });
    };   

    return (
        <div>
            <h1>{orgName}</h1>
            <Form
                schema={EditOrgSchema}
                uiSchema={UIschema}
                onSubmit={type => handleOnSubmit(type)}
                formData={formData}
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
