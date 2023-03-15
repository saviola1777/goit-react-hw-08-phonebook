
import { combineReducers } from "@reduxjs/toolkit";

import { persistReducer } from 'redux-persist';

import authReducer from './Auth/auth-slice'

import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

const rootReducer = combineReducers({
   auth:persistedAuthReducer,
   
})

export default rootReducer 

// import { combineReducers } from "redux"; === обєднує два редюсири істворює нам повню структуру сторе  і він запамятовує що за частинку contacts відповідає  contactsReducer