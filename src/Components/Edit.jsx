import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { editUser,getUpdate } from "../Service/api";
import { FormGroup, FormControl, InputLabel, Input, Button, Typography, makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
    container: {
        width: "50%",
        margin: "3% 0 0 25%",
        '& > *': {
            marginTop: 20
        }
    }
})
const data = {
    "name": "",
    "username": "",
    "email": "",
    "phone": ""
}

const Edit = () => {

    const [user, setUser] = useState(data);
    const { name, username, email, phone } = user;
    const navigate = useNavigate();

    const {id} = useParams();

    const classes = useStyle()

    const inputHandler = (e) => {
        const { name, value } = e.target
        setUser((oldVal) => {
            return { ...oldVal, [name]: value }
        });
    }
    useEffect(() => {
        loadUserData();
    }, []) 

    const loadUserData = async() => {
       const response =  await getUpdate(id);
       setUser(response.data)
   }
    const editHandler = async () => {
        await editUser(id,user)
        navigate('/all')
    }
    
    return (
        <>

            <FormGroup className={classes.container}>
                <Typography variant="h4">Edit User</Typography>
                <FormControl>
                    <InputLabel>Name</InputLabel>
                    <Input name="name" type="text" value={name} onChange={inputHandler} />
                </FormControl>
                <FormControl>
                    <InputLabel>Username</InputLabel>
                    <Input name="username" type="text" value={username} onChange={inputHandler} />
                </FormControl>
                <FormControl>
                    <InputLabel>Email</InputLabel>
                    <Input name="email" type="text" value={email} onChange={inputHandler} />
                </FormControl>
                <FormControl>
                    <InputLabel>Phone</InputLabel>
                    <Input name="phone" type="text" value={phone} onChange={inputHandler} />
                </FormControl>
                <Button variant="contained" color="primary" onClick={editHandler}>Add User</Button>
            </FormGroup>

        </>
    )
}
export default Edit;