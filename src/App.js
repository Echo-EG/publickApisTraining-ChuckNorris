import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import RandomJoke from "./pages/RandomJoke";
import JokeByCategory from "./pages/JokeByCategory";
import Header from "./componenets/Header";
import {CssBaseline} from "@mui/material";

const App = () => {
    return (

        <CssBaseline>
            <div>
                <Router>
                    <Header/>
                    <Switch>
                        <Route exact path="/" component={RandomJoke}/>
                        <Route exact path="/jokebycategory" component={JokeByCategory}/>
                        <Route path="*" component={RandomJoke}/>
                    </Switch>
                </Router>
            </div>
        </CssBaseline>
    );
};

export default App;