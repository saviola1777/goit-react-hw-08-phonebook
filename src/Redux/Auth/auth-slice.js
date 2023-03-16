import { createSlice } from "@reduxjs/toolkit";

import  {signupApi , fetchLogin } from '../Auth/auth-operations'


const initialState = {
   user:{},
   token:"",
   isLoading:false,
   loading:false,
   error:null,

}

const authSlice =createSlice({
   name:"auth",
   initialState,
   extraReducers:builder=>{
builder
.addCase(signupApi.pending ,(store)=>{
   store.loading=true;
   store.error=null;
})
.addCase(signupApi.fulfilled , (store,{payload})=>{
   store.loading=false
   store.user=payload.user
   store.token=payload.token
   store.isLoading=true

})
.addCase(signupApi.rejected , (store,{payload})=>{
   store.loading=false
   store.error=payload
})
.addCase(fetchLogin.pending, store => {
   store.loading = true;
   store.error = null;
 })
 .addCase(fetchLogin.fulfilled, (store, { payload }) => {
   
   store.loading = false;
   store.user = payload.user;
   store.token = payload.token;
   store.isLoading=true
 })
 .addCase(fetchLogin.rejected, (store, { payload }) => {
   store.loading = false;
   store.error = payload;
 })
   }
})

export default authSlice.reducer

// в нашому слайсі ми прописуємощо робити при кожному запиті