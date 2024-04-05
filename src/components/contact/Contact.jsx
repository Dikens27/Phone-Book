import css from './Contact.module.css';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa6';
import { deleteContact } from '../../redux/contacts/operations';
import { useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';

export default function Contact({ contacts: { id, name, number } }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    return dispatch(deleteContact(id))
      .unwrap()
      .then(() => {
        toast.success('Contact deleted');
      })
      .cathe(() => {
        toast.error('Sorry, something went wrong.');
      });
  };

  return (
    <>
      <div className={css.container}>
        <div className={css.miniContainer}>
          <p className={css.text}>
            <FaUser />
            {name}
          </p>
          <p className={css.text}>
            <FaPhoneAlt />
            {number}
          </p>
        </div>
        <button className={css.button} onClick={handleClick}>
          Delete
        </button>
      </div>
      <Toaster />
    </>
  );
}
