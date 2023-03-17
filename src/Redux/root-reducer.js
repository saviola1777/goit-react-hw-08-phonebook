
import { combineReducers } from "@reduxjs/toolkit";

import { persistReducer } from 'redux-persist';   
import storage from 'redux-persist/lib/storage';

import authReducer from './Auth/auth-slice'
import contactsReducer from "./Contacts/contacts-slice"
import filterReducer from './Filter/filter-slice'



const persistConfig = {  // це налаштуання 
  key: 'root',           // під яким імям ми зберігаєсо в локал сторідж
  storage,               // і куди в локал сторідж
  whitelist: ['token'],  // і з цього обєкта що ми огорнимо ми заберемо тільки токе без user . loadind ітд
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer); 

const rootReducer = combineReducers({
   auth:persistedAuthReducer,
   contacts:contactsReducer ,
   filter: filterReducer,
})

export default rootReducer 

// import { combineReducers } from "redux"; === обєднує два редюсири істворює нам повню структуру сторе  і він запамятовує що за частинку contacts відповідає  contactsReducer
//Redax Pesist працює зберігає частину яку ми огорнимо в локал сторідж так якщо якусь частику стейту нашого ми зберігаємо в редаксі то якщо ми огорнимо persistReducer ту частину яку на треба в нашому випадку authReducer тому що там зберігається наш токен  то все що збергається в auth збережеться в локалсторідж
// Тобто коли частина редаксу auth  змінюється вона записується в локал сторідж тому що ми її огорнули в persistReducer(persistConfig, authReducer); де перший параметр це настройки