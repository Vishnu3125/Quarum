import React from 'react';
import './App.css';
import Auth from './features/auth/Auth';
import {useSelector, useDispatch} from 'react-redux';
import {page} from './features/pages/pageSlice';
import Home from './features/pages/comps/Home'

function App() {

  let sec = sessionStorage.getItem("Auth");
  const dispatch = useDispatch()
  const login_completed = useSelector((state) => state.page.value)

  if (sec == "authorized") {
    dispatch(page())
  }

  return (
    <span>
      {login_completed ? <Home></Home> : <Auth></Auth>}
    </span>
  );
}

export default App;
