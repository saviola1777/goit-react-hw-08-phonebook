import css from 'Pages/LoginPage/LoginPage.module.css'
import LoginForm from "../../modules/RegisterLogin/LoginForm"

import { Navigate } from "react-router-dom";            // це компонент який використовується прри переадресації s

import { isUserLogin } from 'Redux/Auth/auth-selectot';

import { useDispatch , useSelector } from "react-redux"
import { fetchLogin } from "Redux/Auth/auth-operations"

const LoginPage= ()=>{
   const isLogin = useSelector(isUserLogin ) 
   const dispath = useDispatch ()
  
   const handleLogin = (data)=>{
   dispath(fetchLogin(data))
   }

   if(isLogin){                //якщо ллюдина зареєстровання isLoading=true то перекидає на сторінку яку я пишу в навігації
      return <Navigate to="/"/>       
         }

   return(
      <div className={css.wrapperRegisterPage}> 
      <LoginForm onSubmit={handleLogin}/>
      </div>
   )
}

export default LoginPage