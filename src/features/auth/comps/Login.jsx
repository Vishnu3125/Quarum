import React from 'react'
import {useDispatch} from 'react-redux';
import {signup} from '../authSlice'
import {page} from '../../pages/pageSlice'
import './LogSign.css'
import axios from 'axios'

const Login = () => {
  //const auth = useSelector((state) => state.auth.value)
  const dispatch = useDispatch()
  
  const verify = () => {
    const email = document.getElementById("email").value
    const pass = document.getElementById("pass").value

    axios.post(`http://localhost:5000/login`, {
      Email: email,
      Pass: pass
    })
      .then(res => {
        const validify = res.data;
        //console.log(res)

        if (validify == 0) {
          document.getElementById("email").classList.add("form-incorrect-input");
          document.getElementById("incorrect_email").classList.remove("form-incorrect-hidden");
        }
        else if (validify == 1) {
          document.getElementById("email").classList.remove("form-incorrect-input");
          document.getElementById("incorrect_email").classList.add("form-incorrect-hidden");

          document.getElementById("pass").classList.add("form-incorrect-input");
          document.getElementById("incorrect_pass").classList.remove("form-incorrect-hidden");
        }
        else {
          //document.cookie = "auth = authorized" + ";" + "ID = " + validify._Id + ";" + "name = " + validify.Name + ";" + "email = " + validify.Email;
          sessionStorage.setItem("Auth", "authorized");
          sessionStorage.setItem("ID", validify._id);
          sessionStorage.setItem("name", validify.Name);
          sessionStorage.setItem("email", validify.Email);
          
          //document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
          //console.log(validify)
          dispatch(page())
        }
      })
  }

  return (
    <div className="parentcontainer">
      <img src="background.png" alt="Avatar" className="background_image"></img>
      <header className="form-header"></header>
      <div className="maincontainer">
        <div className="form_container">
          <div className="imgcontainer">
            <img src="QUA_2.png" alt="Avatar"></img>
          </div>

          <div className="container">
            <br/>
            <label>
              <b>Email</b>
            </label>
            <input
              className="input_fileds form-input"
              type="text"
              placeholder="Enter Email"
              name="email"
              id="email"
              required></input>
            <span className="form-incorrect-hidden form-incorrect" id="incorrect_email"> Invalid Email</span>
            <br/><br/>
            <label>
              <b>Password</b>
            </label>
            <input
              className="form-input"
              type="password"
              placeholder="Enter Password"
              name="pass"
              id="pass"
              required></input>
            <span className="form-incorrect-hidden form-incorrect" id="incorrect_pass"> Incorrect Password</span>
            <br/><br/>
            <span className="psw">
              <a href="#">Forgot password?</a>
            </span>
            <button className="form-button" onClick={verify}>Login</button>
          </div>
          <hr className="form-hr"/>
          <div className="container sign_container">New to Quarum ?
            <a href="#" onClick={() => dispatch(signup())}>
              Sign-up</a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Login
