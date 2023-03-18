import css from './Header.module.css'
import { NavLink, Link } from "react-router-dom";
import { isUserLogin} from 'Redux/Auth/auth-selectot';
import { useSelector} from 'react-redux';

 import UserMenu from 'components/UserMenu/UserMenu';

const Header = () => {
  
  const isLoading = useSelector(isUserLogin)

  return (

    <div className={css.wrapperHeader}>
      <Link to="/" className={css.link}><span className={css.span} /><span /><p >Phonebook</p></Link>
      <div className={css.wrapperLogin}>

        {!isLoading && <NavLink className={css.register} to="/register">Register</NavLink>}
        {!isLoading && <NavLink className={css.login} to="/login">login</NavLink>}

        {isLoading && <UserMenu/>}

      </div>
    </div>
  );
};

export default Header;