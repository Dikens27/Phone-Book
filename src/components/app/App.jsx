import Layout from '../layout/Layout';
import { Suspense, lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import Loader from '../loader/Loader';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from '../../redux/auth/operations';

const HomePage = lazy(() => import('../../pages/Home'));
const RegistrationPage = lazy(() => import('../../pages/Registration'));
const LoginPage = lazy(() => import('../../pages/Login'));
const ContactsPage = lazy(() => import('../../pages/Contacts'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
