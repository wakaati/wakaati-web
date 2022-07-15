import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../../Enum/index'
import { links } from "../../Data"


export const signInUser = createAsyncThunk('user/login', (info)=>{
      return  axios.get(links.LOGIN_URL, info)
            .then(response => {
                const user = response.data
            })
})

export const signInSlice = createSlice({
    name: 'signin',
    initialState: {
        loading: false,
        user: [],
        error: '',
    },
    extraReducers: builder => {
        builder.addCase(signInUser.pending, state =>{
            state.loading = true
        })
        builder.addCase(signInUser.fulfilled, state => {
            state.loading = false
            state.user = action.payload
            state.error = ''
        })
        builder.addCase(signInUser.rejected, state => {
            state.loading = false
            state.user = []
            state.error = action.payload
        })
    },

    
})


export default signInSlice.reducer