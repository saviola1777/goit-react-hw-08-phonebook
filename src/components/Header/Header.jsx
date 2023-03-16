
import css from 'components/Header/Header.module.css'
// import NavbarAuth from 'components/Navigation/NavbarAuth/NavbarAuth'
import { NavLink, Link } from "react-router-dom";
import { isUserLogin } from 'Redux/Auth/auth-selectot';
import { useSelector } from 'react-redux';



const Header = () => {
  const isLoading = useSelector(isUserLogin)

  return (

    <div className={css.wrapperHeader}>
      <Link to="/" className={css.link}><span className={css.span} /><span /><p >Phonebook</p></Link>
      <div className={css.wrapperLogin}>
        {!isLoading && <NavLink className={css.register} to="/register">Register</NavLink>}
        {!isLoading && <NavLink className={css.login} to="/login">login</NavLink>}
        {isLoading && <div>Sasha<button>logaut</button></div>}

      </div>
    </div>
  );
};

export default Header;