import React from 'react';
import {AppBar, Toolbar} from "@mui/material";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <AppBar position="sticky">
            <Toolbar>
                <Link to="/">Random Chuck joke</Link>
                <Link to="/jokebycategory">Joke by category</Link>
            </Toolbar>
        </AppBar>
    );
};

export default Header;