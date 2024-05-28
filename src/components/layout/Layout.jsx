import AppBar from '../appBar/AppBar';
import css from '../layout/Layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={css.container}>
      <AppBar />
      {children}
    </div>
  );
}
