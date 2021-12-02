import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getjokeByCategorieAsync} from "../redux/Slice";
import {Card, CardContent, Grid, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {getJokesCategoriesAsync} from "../redux/jokeCategoriesSlice";

const useStyle = makeStyles({
    alignCategories:{
        display:"inline-block",
        // flexDirection:"row"
    }
})

const JokeByCategory = () => {

    const classes = useStyle();
    // const categories =

    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(getJokesCategoriesAsync())
    }, [])

    const categories = useSelector((state) => state.jokeCategories)

    const jokeByCategorie = useSelector((state) => state.chuckState)

    const {result} = jokeByCategorie;

    const handleCategorieClick = (e) =>{
        dispatch(getjokeByCategorieAsync({categorie: e.target.value}))
    }

    return (
        <div>
            {categories.map((categoriesList) =>{
                return <Grid item sx={{m:1}} className={classes.alignCategories}>
                    <Typography>{categoriesList}</Typography>
                    <input type="radio" onClick={handleCategorieClick} value={categoriesList} name="categories"/>
                </Grid>
            })}
            {result.map((newResult, key) =>{
                return <Grid item key={newResult.id} id={newResult.id} >
                    <Typography variant="h3">{newResult.value}</Typography>
                </Grid>
            })}
        </div>
    );
};

export default JokeByCategory;