import { createSlice } from "@reduxjs/toolkit";

import  {signupApi , fetchLogin  , fetchCurrent , fetchLogout} from '../Auth/auth-operations'


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
 .addCase(fetchCurrent.pending, store => {
   store.loading = true;
   store.error = null;
 })
 .addCase(fetchCurrent.fulfilled, (store, { payload }) => {
   store.loading = false;
   store.user = payload;
   // store.token = payload.token;
   store.isLoading=true
 })
 .addCase(fetchCurrent.rejected, (store, { payload }) => {
   store.loading = false;
   store.error = payload;
   store.token = '';
 })
 .addCase(fetchLogout.pending, store => {
   store.loading = true;
   store.error = null;
 })
 .addCase(fetchLogout.fulfilled, (store) => {
   
   store.loading = false;
   store.user = {};
   store.token = '';
   store.isLoading=false;
 })
 .addCase(fetchLogout.rejected, (store, { payload }) => {
   store.loading = false;
   store.error = payload;
 })
   }
})

export default authSlice.reducer

// в нашому слайсі ми прописуємощо робити при кожному запиті