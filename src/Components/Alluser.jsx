import React, { useState, useEffect } from "react";
import { getUsers,deleteUser } from "../Service/api";
import {Link} from "react-router-dom";
import { Table, TableCell, TableHead, TableRow, TableBody,Button, makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
    table: {
        width: "90%",
        margin: "50px 0 0 50px"
    },
    thead: {
        '& > * ': {
            background: 'black',
            color: "white",
            fontSize: 20
        }
    },
    row: {
        '& > * ': {
            fontSize: 20
        }
    }

})

const Alluser = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUseres()
    }, [])

    const getAllUseres = async () => {
        const response = await getUsers();
        setUsers(response.data)
    }
    const deleteHandler = async(id) => {
           await deleteUser(id)
           getAllUseres()
    }
    const classes = useStyle();
    return (
        <>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow className={classes.thead}>
                        <TableCell>Id</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>User Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((item) => (
                        <TableRow className={classes.row}>
                        <TableCell>{item.id}</TableCell>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.username}</TableCell>
                        <TableCell>{item.email}</TableCell>
                        <TableCell>{item.phone}</TableCell>
                        <TableCell>
                        <Button variant="contained" color="primary" style={{marginRight: "7px"}} component={Link} to={"/edit/" + [item.id]}>Edit</Button>
                        <Button variant="contained" onClick={() => deleteHandler(item.id)} color="secondary">Delete</Button>
                        </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    )
}
export default Alluser;