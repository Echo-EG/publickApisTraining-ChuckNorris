import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const key = "9d2276bf14msh1d2a9c52bce377dp141e96jsn37ab4ea01f23"
const host = "matchilling-chuck-norris-jokes-v1.p.rapidapi.com"



export const getJokesCategoriesAsync = createAsyncThunk(
    "categories/getJokesCategoriesAsync",
    async () =>{
        const response = await fetch("https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/categories", {
            "method": "GET",
            "headers": {
                "accept": "application/json",
                "x-rapidapi-host": host,
                "x-rapidapi-key": key
            }
        })
        if(response.ok){
            const categories = await response.json();
            return {categories};
        }
    }
)


export const jokeCategoriesSlice= createSlice({
    name: "jokeCategorieSlice",
    initialState: [] ,
    reducers:{

    },
    extraReducers: (builder) =>{
        builder.addCase(getJokesCategoriesAsync.fulfilled, (state, action) =>{
            return action.payload.categories;
        })
    }
})

export default jokeCategoriesSlice.reducer;