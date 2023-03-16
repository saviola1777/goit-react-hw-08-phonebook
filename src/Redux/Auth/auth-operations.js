import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from '../../shared/api/auth'

export const signupApi = createAsyncThunk (
   'auth/signup',
   async (data, { rejectWithValue }) => {
     try {
       const resault= await api.signupPost(data);
       return resault.data

       
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
      return result.data;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);