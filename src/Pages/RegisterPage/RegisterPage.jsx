import RegisterForm from "modules/RegisterForm/RegisterForm"
import css from './RegisterPage.module.css'

import { Navigate } from "react-router-dom";            // це коипонент який використовується прри переадресації

import { isUserLogin } from 'Redux/Auth/auth-selectot';

import { useDispatch , useSelector } from "react-redux"
import { signupApi } from "Redux/Auth/auth-operations"

const RegisterPage = ()=>{
   const isLogin = useSelector(isUserLogin ) 
   const dispath = useDispatch ()
  
   const handleSignup = (data)=>{
   dispath(signupApi(data))

   if(isLogin){                //якщо ллюдина зареєстровання isLoading=true
return <Navigate to="/"/>       
   }
  
   }

   return(
      <div className={css.wrapperRegisterPage}> 
      <RegisterForm onSubmit={handleSignup}/>
      </div>
   )
}

export default RegisterPage