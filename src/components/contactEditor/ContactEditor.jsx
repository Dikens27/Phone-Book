import css from './ContactEditor.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateContact } from '../../redux/contacts/operations';
import { FcCheckmark } from 'react-icons/fc';

export default function ContactEditor({
  contactId,
  initialValueName,
  initialValueNumber,
}) {
  const [name, setName] = useState(initialValueName);
  const [number, setNumber] = useState(initialValueNumber);

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      updateContact({
        id: contactId,
        name: name,
        number: number,
      })
    );
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <div>
        <input
          className={css.input}
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          className={css.input}
          type="text"
          name="number"
          value={number}
          onChange={e => setNumber(e.target.value)}
        />
      </div>
      <button className={css.button} type="submit">
        <FcCheckmark />
      </button>
    </form>
  );
}
