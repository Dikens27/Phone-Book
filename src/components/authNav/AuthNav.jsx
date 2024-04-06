import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export default function AuthNav() {
  return (
    <div className={css.container}>
      <NavLink
        className={({ isActive }) => (isActive ? css.active : css.link)}
        to="/register"
      >
        Register
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? css.active : css.link)}
        to="/login"
      >
        Log In
      </NavLink>
    </div>
  );
}
