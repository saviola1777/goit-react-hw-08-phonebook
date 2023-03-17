
import Cointeiner from 'components/Cointeiner/Cointeiner';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

// import { useSelector} from 'react-redux';
// import { isUserLogin } from 'Redux/Auth/auth-selectot';

const HomePage = () => {
  // const isLoading = useSelector(isUserLogin)
  return (

<Cointeiner>
      <h2>phonebook</h2>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter  />
      <ContactList />
    </Cointeiner>

  )
}
export default HomePage