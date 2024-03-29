import { configureStore, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import storage from "./storage";
import { persistReducer } from "redux-persist"
import logger from "redux-logger"
import cartReducer from "./cartSlice"
import productsReducer from "./productsSlice"
import userReducer from "./userSlice"
import { apiSlice } from "./apiSlice";


const rootReducer = combineReducers({
    cart: cartReducer,
    [apiSlice.reducerPath]: apiSlice.reducer ,
    products: productsReducer,
    user: userReducer, 
})


const persistConfig = {
  key: "root",
  storage,
  debug: false,
};

const persistedReducers = persistReducer(persistConfig, rootReducer);

const middlewares = [apiSlice.middleware]

if(process.env.NODE_ENV !== 'production'){
    middlewares.push(logger)
}


export const store = configureStore({
  reducer: persistedReducers,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middlewares),
});

setupListeners(store.dispatch)