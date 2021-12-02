import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getRandomJokeAsync} from "../redux/Slice";
import {Typography} from "@mui/material";

const RandomJoke = () => {

    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(getRandomJokeAsync())
    }, [])

    const chuckJoke = useSelector((state) => state.chuckState)



    return (
        <div>

            <Typography variant="h3">{chuckJoke.value}</Typography>
        </div>
    );
};

export default RandomJoke;