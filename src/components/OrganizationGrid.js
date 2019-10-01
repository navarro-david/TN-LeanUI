import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
// import Grid from 'react-json-grid'

// const OrgGrid = props => {
//     return (
//         <Grid
//             data={props.data}

//             styleCell={{
//                 borderColor: 'transparent'
//             }}
//             styleHeaderCell={{
//                 borderColor: 'transparent',
//                 color: '#969696',
//                 background: '#f5f5f5',
//                 textTransform: 'capitalize',
//             }}
//             styleRowHeaderCell={{
//                 height: '64px',
//                 maxHeight: '64px'
//             }}
//             rowHigh={32}
//         />
//     )
// }

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

// const rows = [
//     createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
//     createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
//     createData("Eclair", 262, 16.0, 24, 6.0),
//     createData("Cupcake", 305, 3.7, 67, 4.3),
//     createData("Gingerbread", 356, 16.0, 49, 3.9)
// ];

const OrgGrid = props => {

    const rows = props.data

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
                        <TableCell align="right">{JSON.stringify(row.address)}</TableCell>
                        <TableCell align="right">
                            <button>Edit</button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default OrgGrid;
