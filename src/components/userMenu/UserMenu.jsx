import { NavLink } from 'react-router-dom';

export default function UserMenu() {
  return (
    <nav>
      <p>Welcome,</p>
      <NavLink>Logout</NavLink>
    </nav>
  );
}
