import Layout from '../layout/Layout';
import { Suspense, lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../loader/Loader';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from '../../redux/auth/operations';
import RestrictedRoute from '../restrictedRoute/RestrictedRoute';
import PrivateRoute from '../privateRoute/PrivateRoute';
import { selectIsRefreshing } from '../../redux/auth/selectors';

const HomePage = lazy(() => import('../../pages/Home'));
const RegistrationPage = lazy(() => import('../../pages/Registration'));
const LoginPage = lazy(() => import('../../pages/Login'));
const ContactsPage = lazy(() => import('../../pages/Contacts'));

export default function App() {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Layout>
      {isRefreshing ? (
        <Loader />
      ) : (
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/register"
              element={<RestrictedRoute component={<RegistrationPage />} />}
            />
            <Route
              path="/login"
              element={<RestrictedRoute component={<LoginPage />} />}
            />
            <Route
              path="/contacts"
              element={<PrivateRoute component={<ContactsPage />} />}
            />
          </Routes>
        </Suspense>
      )}
    </Layout>
  );
}
