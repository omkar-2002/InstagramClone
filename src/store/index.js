import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { createLogicMiddleware } from "redux-logic";

import authLogics from "../store/auth/logic";
import authReducer from "../store/auth/slice";

let logicArr = [...authLogics];

const logicMiddleware = createLogicMiddleware([...logicArr]);

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [logicMiddleware],
  devTools: true,
});

export default store;
