import {configureStore} from '@reduxjs/toolkit';
import cakedesginReducer from './cakedesginSlice';

export default configureStore({
    reducer:{
        cakedesgins:cakedesginReducer
    }
})