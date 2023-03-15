import { Link } from 'react-router-dom';
import css from 'components/Header/Header.module.css'
// import NavbarAuth from 'components/Navigation/NavbarAuth/NavbarAuth'
import { NavLink } from "react-router-dom";


const Header = () => {
   return (
      
     <div className={css.wrapperHeader}>
      <Link to="/" className={css.link}><span className={css.span}/><span/><p >Phonebook</p></Link>
     <div className={css.wrapperLogin}>
   <NavLink className={css.register} to="/register">Register</NavLink>
   <NavLink className={css.login} to="/login">login</NavLink>
      </div>
     </div>
   );
 };
 
 export default Header;