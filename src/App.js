import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import RandomJoke from "./pages/RandomJoke";
import JokeByCategory from "./pages/JokeByCategory";
import Header from "./componenets/Header";
import {Container, CssBaseline} from "@mui/material";

const App = () => {
    return (

        <CssBaseline>
            <div>
                <Router>
                    <Header/>
                    <Container maxWidth="lg">
                        <Switch>
                            <Route exact path="/" component={RandomJoke}/>
                            <Route exact path="/jokebycategory" component={JokeByCategory}/>
                            <Route path="*" component={RandomJoke}/>
                        </Switch>
                    </Container>
                </Router>
            </div>
        </CssBaseline>
    );
};

export default App;