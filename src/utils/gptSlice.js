import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'GptSearchView',
    initialState: {
        gptSearchView: false,
       results:[],
    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.gptSearchView = !state.gptSearchView;
        },
        addResults(state , action){
         state.results = action.payload;
        }
    }
});

export const { toggleGptSearchView ,addResults} = gptSlice.actions;
export default gptSlice.reducer;
