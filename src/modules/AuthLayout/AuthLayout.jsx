import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCurrent } from 'Redux/Auth/auth-operations';

const AuthLayout = ({children}) =>{
   const dispatch = useDispatch()
   useEffect(()=>{
     dispatch(fetchCurrent())
   },[dispatch])
   return (
      <>{children}</>
   )
}

export default AuthLayout