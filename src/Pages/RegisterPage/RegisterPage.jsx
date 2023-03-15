import RegisterForm from "modules/RegisterForm/RegisterForm"
import css from './RegisterPage.module.css'

import { useDispatch } from "react-redux"
import { signupApi } from "Redux/Auth/auth-operations"

const RegisterPage = ()=>{
   const dispath = useDispatch ()
   const handleSignup = (data)=>{
   dispath(signupApi (data))
   }

   return(
      <div className={css.wrapperRegisterPage}> 
      <div className={css.title}>register</div>
      <RegisterForm onSubmit={handleSignup}/>
      </div>
   )
}

export default RegisterPage