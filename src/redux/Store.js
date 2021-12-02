import {configureStore} from "@reduxjs/toolkit";
import chuckJokeReducer from "./Slice";
import jokeCategorieReducer from "./jokeCategoriesSlice";

export const store = configureStore({
    reducer:{
        chuckState: chuckJokeReducer,
        jokeCategories: jokeCategorieReducer
    }
})