import css from './Registration.module.css';

import RegistrationForm from '../components/registrationForm/RegistrationForm';

export default function Registration() {
  return (
    <div className={css.container}>
      <RegistrationForm />
    </div>
  );
}
