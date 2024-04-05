import css from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice';
import { selectFilters } from '../../redux/filters/selectors';

export default function SearchBox() {
  const dispatch = useDispatch();
  const filtersName = useSelector(selectFilters);

  const searchContact = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div>
      <p>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={filtersName}
        onChange={searchContact}
      />
    </div>
  );
}
