
import { configureStore } from '@reduxjs/toolkit'
import rootSlice from './rootSlice';
import createSagaMiddleware from '@redux-saga/core';
import sagaFile from './sagaFile';



/* const store=configureStore({
    reducer:{
        rootReducer:rootSlice,
        middleware:()=>[sagaMidleware]
    }
})
sagaMidleware.run(sagaFile) */
const sagaMiddleware = createSagaMiddleware();
const store  = configureStore({
    reducer:{
        rootReducer:rootSlice
    },
    middleware:()=>[sagaMiddleware]
});

sagaMiddleware.run( sagaFile);
export default store;