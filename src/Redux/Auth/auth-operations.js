import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from '../../shared/auth'

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