import React from 'react';
import './App.css';
import Auth from './features/auth/Auth';
import {useSelector, useDispatch} from 'react-redux';
import {page} from './features/pages/pageSlice';
import Home from './features/pages/comps/Home'

function App() {

  let cook = decodeURIComponent(document.cookie)
  const status = useSelector((state) => state.page.value)
  const dispatch = useDispatch()

  if (cook == "authorized") {
    //dispatch(page())
  }

  return (
    <div>
      {status ? <Home></Home> : <Auth></Auth>}
    </div>
  );
}

export default App;
