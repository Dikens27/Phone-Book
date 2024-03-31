import css from './Contacts.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoading, selectError } from '../redux/contacts/selectors';
import { fetchContacts } from '../redux/contacts/operations';
import ContactForm from '../components/contactForm/ContactForm';
import SearchBox from '../components/searchBox/SearchBox';
import ErrorMessage from '../components/errorMassage/ErrorMassage';
import Loader from '../components/loader/Loader';
import ContactList from '../components/contactList/ContactList';

export default function Contacts() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {error && <ErrorMessage />}
      {loading && <Loader />}
      <ContactList />
    </div>
  );
}
