import React from 'react';
import './App.css';
import Auth from './features/auth/Auth';
import {useSelector, useDispatch} from 'react-redux';
import {page} from './features/pages/pageSlice';
import Index from './features/pages/comps/Index'

function App() {

  let sec = sessionStorage.getItem("Auth");
  const dispatch = useDispatch()
  const login_completed = useSelector((state) => state.page.value)

  if (sec === "authorized") {
    dispatch(page())
  }

  return (
    <span>
      {login_completed ? <Index/> : <Auth/>}
    </span>
  );
}

export default App;
