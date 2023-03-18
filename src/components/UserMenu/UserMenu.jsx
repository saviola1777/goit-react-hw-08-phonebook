import css from './UserMenu.module.css'

import {  getUser } from 'Redux/Auth/auth-selectot';
import {  useDispatch , useSelector,} from 'react-redux';
import { fetchLogout } from 'Redux/Auth/auth-operations';

const UserMenu= () => {
   const name = useSelector(getUser)
  const dispatch = useDispatch()

  const onLogout = () => {
    dispatch(fetchLogout())
  }
return (
  
   <div className={css.wrapperLogout}>
   <p className={css.nameLogout}>{name}</p>
   <button className={css.buttonLogout} onClick={onLogout}>logout</button></div>

  );
};

export default  UserMenu ;