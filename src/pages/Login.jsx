import css from './Login.module.css';

import LoginForm from '../components/loginForm/LoginForm';

export default function Login() {
  return (
    <div className={css.container}>
      <LoginForm />
    </div>
  );
}
