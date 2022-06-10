import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { createUserDocumentfromAuth, onAuthStateChangedListener } from './utils/firebase/firebase.util';
import { setCurrentUser } from './store/user/user.action';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Shop from './routes/shop/shop.component';
import Authentication from './routes/Authentication/authentication.component';
import Checkout from './routes/checkout/checkout.component';
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentfromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
    //eslint-disable-next-line
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
