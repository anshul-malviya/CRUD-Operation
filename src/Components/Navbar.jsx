import React from "react";
import {NavLink} from "react-router-dom";
import { AppBar, Toolbar, makeStyles} from '@material-ui/core';

const useStyle = makeStyles({
    header: {
        background: "black"
    },
     tab: {
         color: "white",
         textDecoration : "none",
         marginRight: 30,
         fontSize: 18
     }
})

const Navbar = () => {
    const classes = useStyle();
    return (
        <>
            <AppBar className={classes.header} position="">
                <Toolbar>
                    <NavLink className={classes.tab} to="/">Home</NavLink>
                    <NavLink className={classes.tab} to="/all">All User</NavLink>
                    <NavLink className={classes.tab} to="/add">Add User</NavLink>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;