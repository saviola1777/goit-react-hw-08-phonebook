import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from '../../shared/api/auth'

export const signupApi = createAsyncThunk (
   'auth/signup',
   async (data, { rejectWithValue }) => {
     try {
       const resault= await api.signup(data);
       return resault

       
     } catch ({ response }) {
       return rejectWithValue(response);
     }
   }
 );

 export const fetchLogin = createAsyncThunk(
  'auth/login',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.login(data);
      return result;
    } 
    catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);

export const fetchCurrent = createAsyncThunk(
  'auth/current',
  async(_,{ rejectWithValue , getState })=>{   // getState має доступ до глобального стора
try{
  const{auth}=getState()                    // з глобального стора бремо auth  в якому наш токен
  const data =await api.getCurrent(auth.token)  
  return data
}
catch ({ response }) {
  return rejectWithValue(response);
}
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      if (!auth.token) {             // робимо умову якшо токен пусти  то запит не робимо
        return false;
      }
    }
  },
)

export const fetchLogout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const data = await api.logout();
      return data;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);

// Redux Toolkit спрощує процес оголошення асинхронного генератора екшену за допомогою функції createAsyncThunk(). Першим аргументом вона приймає тип екшену, а другим функцію, яка повинна виконати HTTP-запит і повернути проміс із даними, які стануть значенням payload. Вона повертає асинхронний генератор екшену (операцію) при запуску якого виконається функція з кодом запиту.