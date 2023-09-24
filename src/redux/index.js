//import { combinedReducer } from "redux";
import { ActionsReducer, rootSaga } from "./reducer";
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from "redux-saga";
// export const createRootReducer = () => {
//     combinedReducer({
//         Activity : ActionsReducer
//     })
// };
export default () => {
    const sagaMiddleWare = createSagaMiddleware();
    const store = configureStore ({
        reducer: ActionsReducer,
        middleware: [sagaMiddleWare]
    });
     
    sagaMiddleWare.run(rootSaga);
    return store;
}

