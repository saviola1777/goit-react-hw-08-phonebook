import css from'./PublicRoute.module.css'

import { Navigate , Outlet } from "react-router-dom"
import { useSelector} from "react-redux"

import { getAuth } from "../../Redux/Auth/auth-selectot";

const PublicRoute = () =>{                    // створюємо приватний роут який буде обгортати наші сторінки 
   const{isLoading , token}= useSelector(getAuth)

    if(!isLoading && token){                             // якщо isLoading = false це знчать шо людини не зарреєстрована але токен є йде спінер чи щн щось
      return <span className={css.loader}></span>
   }  
   if(isLoading){                             // якщо isLoading = true це знчать шо людини  зарреєстрована чи залогінена  то ми повнртаємо її на ;jvfiy. cnjhsyre
      return <Navigate to="/"/>
   }
   return <Outlet/>                     // в іншому випадку властивість <Outlet/> повертає на дочірню сторінку обгорнутою PrivateRoute

}
export default PublicRoute