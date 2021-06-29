import { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';
import { authActions } from './store/auth';

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedUser = localStorage.getItem('isLoggedIn');
    if (storedUser === '1') {
      dispatch(authActions.login());
    }
  }, []);

  return (
    <Fragment>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
