import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getJokesCategoriesAsync} from "./jokeCategoriesSlice";

const key = "9d2276bf14msh1d2a9c52bce377dp141e96jsn37ab4ea01f23"
const host = "matchilling-chuck-norris-jokes-v1.p.rapidapi.com"

export const getRandomJokeAsync = createAsyncThunk(
    "jokes/getRandomJokeAsync",
    async () => {
        const response = await fetch("https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random", {
            "method": "GET",
            "headers": {
                "accept": "application/json",
                "x-rapidapi-host": host,
                "x-rapidapi-key": key
            }
        })
        if(response.ok){
            const randomJoke = await response.json();
            return {randomJoke}
        }
    }
)

export const getjokeByCategorieAsync = createAsyncThunk(
    "joke/getjokeByCategorieAsync",
    async (payload) =>{
        const response = await fetch(`https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/search?query=${payload.categorie}`, {
            "method": "GET",
            "headers": {
                // "accept": "application/json",
                "x-rapidapi-host": host,
                "x-rapidapi-key": key
            }
        })
        if (response.ok){
            const joke = await response.json();
            return {joke}
            // return await response.json()
        }
    }
)




export const chuckJokeSlice = createSlice({
    name: "chuckJokeSlice",
    initialState: [] || {},
    reducers:{

    },
    extraReducers: (builder) => {
        builder.addCase(getRandomJokeAsync.fulfilled, (state, action) =>{
            return action.payload.randomJoke;
        })
        builder.addCase(getjokeByCategorieAsync.fulfilled, (state, action) =>{
            return action.payload.joke;
        })

    }
})

export default chuckJokeSlice.reducer;