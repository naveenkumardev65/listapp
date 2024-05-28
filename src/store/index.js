import { configureStore } from "@reduxjs/toolkit";
import userListReducer from "./reducer";
import createSagaMiddleware from 'redux-saga';
import rootSagas from './saga';


// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: {
        userListReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSagas);

// store.subscribe(() => console.log('store', store.getState()));

export default store;