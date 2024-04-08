import css from './ContactEditor.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateContact } from '../../redux/contacts/operations';
import { FcCheckmark } from 'react-icons/fc';

export default function ContactEditor({ contactId, initialValue }) {
  const [name, setName] = useState(initialValue);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      updateContact({
        id: contactId,
        name,
      })
    );
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <input
        className={css.input}
        type="text"
        name="name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button className={css.button} type="submit">
        <FcCheckmark />
      </button>
    </form>
  );
}
