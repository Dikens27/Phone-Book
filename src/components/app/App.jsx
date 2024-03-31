import Layout from '../layout/Layout';
import { Suspense, lazy } from 'react';
// import Loader from '../loader/Loader';
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('../../pages/Home'));
const RegistrationPage = lazy(() => import('../../pages/Registration'));
const LoginPage = lazy(() => import('../../pages/Login'));
const ContactsPage = lazy(() => import('../../pages/Contacts'));

export default function App() {
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
