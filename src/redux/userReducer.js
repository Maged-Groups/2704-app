import { createSlice } from "@reduxjs/toolkit";

const userReducer = createSlice({
    name: 'userReducer',
    initialState: {
        user: {
            firstName: 'Maged',
            lastName: 'Yaseen',
            gender: 'male',
            photo: 'https://avatars.githubusercontent.com/u/141430890?s=40&v=4',
        },
        token: null,
        isLoggedin: true
    },
    reducers: {
        rdxLoggedin: () => { console.log('setUserName function fired') }
    }
});



export default userReducer.reducer



