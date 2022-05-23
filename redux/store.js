import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: {},
  middleware: [saga],
});

export default store;
