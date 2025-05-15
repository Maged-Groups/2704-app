import { configureStore } from "@reduxjs/toolkit"
import userReducer from './userReducer';
import cartReducer from './cartReducer';
import settingReducer from './settingReducer';

const store = configureStore({
    reducer: {
        userReducer,
        cartReducer,
        settingReducer
    }
});

export default store