import css from "components/ContactList/ContactList.module.css";
import { useEffect } from "react";

import * as actions from '../../Redux/Contacts/contacts-operations'
import { useSelector, useDispatch } from "react-redux";
import { allContact} from '../../Redux/Contacts/contacts-selector'
import { getFilter , getfiteredContacts} from '../../Redux/Filter/filter-selector'

const ContactList = () => {

  const contacts = useSelector(allContact)
  const filter = useSelector(getFilter);
  const fiteredContacts = getfiteredContacts(filter, contacts);
  console.log('contacts', contacts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actions.fetchAllContacts())  // викликаємо операцію в діспатч v
  }, [dispatch])


  const deleteContact = id => {
    dispatch(actions.fetchDeleteContacts(id))
  }

  const contactList = fiteredContacts.map(({ id, name, number }) =>
    <li className={css.contactItem} key={id}>
      <p className={css.contactSpan}>{name}</p><p className={css.contactSpam}>{number}</p>
      <button className={css.contactButton} type="button" onClick={() => deleteContact(id)}>delete</button></li>)

  return (

    <ol className={css.contactList}>{contactList}</ol>

  )
}

export default ContactList


// тут фсю логіку ми робили в експортованій функці  {getFilteredContact} 'Redux/Contacts/contacts-selector'
// ми визвали useSelector який дає доступ до глобального стейту і передали функцію яка має доступ до всії контактів і фільтрів якщо фільтр пустий вона повнртає всі контакти з глобального стейту б якшо ні то фільтрує по імені і повертає ті контакти одфільтровані і ми перебираємо і одмалювуємо всі контакти якшо шукаємо по фільтру воно одмалює одфільтровані контакти 