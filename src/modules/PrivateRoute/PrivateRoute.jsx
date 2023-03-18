import css from './PrivateRoute.module.css'
import { Navigate , Outlet } from "react-router-dom"
import { useSelector} from "react-redux"
import { getAuth } from "../../Redux/Auth/auth-selectot";

const PrivateRoute = () =>{                    // створюємо приватний роут який буде обгортати наші сторінки 
  
   const{isLoading , token}= useSelector(getAuth)
   // const isLoading = useSelector(isUserLogin)  // доступ до властивості стору isLoading i до token щоб бачити чи true чи false при реєстрації чи логіні вона стає true
   if(!isLoading && token){                             // якщо isLoading = false це знчать шо людини не зарреєстрована але токен є йде спінер чи щн щось
      return <span className={css.loader}></span>
   }
   if(!isLoading && !token){
      return <Navigate to='/login'/>
   }
   return <Outlet/>                     // в іншому випадку властивість <Outlet/> тобто коли isLoading = true людина залогінена. повертає на дочірню сторінку обгорнутою PrivateRoute

}
export default PrivateRoute