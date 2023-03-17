
import instance from "./auth";


 export const getAllContact =async()=>{
   const {data}= await instance.get('/contacts')
  //  console.log(data)
   return data
  
 }

 export const addContacts =async(data)=>{
  const {data:resault}= await instance.post('/contacts', data)
  
  return resault
 }

 export const deleteContacts = async(id)=>{
  const {data}= await instance.delete(`/contacts/${id}`)
  return data
 }