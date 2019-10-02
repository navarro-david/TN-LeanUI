import React from "react";
import { withRouter } from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import Button from "@material-ui/core/Button";

const OrgGrid = withRouter((props) => {
    const rows = props.data;

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Description</TableCell>
                    <TableCell align="right">SAP ID</TableCell>
                    <TableCell align="right">Salesforce ID</TableCell>
                    <TableCell align="right">Address</TableCell>
                    <TableCell align="right">Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map(row => (
                    <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                            {row.name}
                        </TableCell>
                        <TableCell align="right">{row.description}</TableCell>
                        <TableCell align="right">{row.sapId}</TableCell>
                        <TableCell align="right">{row.salesforceId}</TableCell>
                        <TableCell align="right">
                            {JSON.stringify(row.address)}
                        </TableCell>
                        <TableCell align="right">
                            <Button
                                onClick={() =>
                                    props.history.push({
                                        pathname: `/organization/${row.name}`,
                                        state: { id: `${row.id}` }
                                    })
                                }
                                color="primary"
                            >
                                Edit
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
});

export default OrgGrid;
