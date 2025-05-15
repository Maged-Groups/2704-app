import { createSlice } from "@reduxjs/toolkit";

const settingReducer = createSlice({
    name: 'settingReducer',
    initialState:{
        theme: 'default',
        time: '',
        date: '',
        language: 'EN',
        fontSize: 'lg',
    },
    reducers: {
        // 
    }
})

export default settingReducer.reducer;