import React from 'react';
import {AppBar, Container, Toolbar} from "@mui/material";
import {Link} from "react-router-dom";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles({
    header:{
        justifyContent:"space-around",
        display:"flex",
    },
    linkStyles:{
        textDecoration: "none",
        color:"black"
    }
})

const Header = () => {

    const classes = useStyles();

    return (
        <AppBar position="sticky">
            <Container maxWidth="lg">
                <Toolbar className={classes.header}>
                    <Link to="/" className={classes.linkStyles}>Random Chuck joke</Link>
                    <Link to="/jokebycategory" className={classes.linkStyles}>Joke by category</Link>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;