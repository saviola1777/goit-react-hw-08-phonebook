import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from '../../shared/auth'

export const signupApi = createAsyncThunk (
   "auth/signup" ,
   async(data,thunkApi)=>{
      try{
const resault  =await api.signupPost(data)
return resault
      }
      catch({response}){
         return thunkApi.rejectWithValue(response)
      }
   }
)