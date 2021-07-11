import React from 'react'
import {useDispatch} from 'react-redux';
import {login} from '../authSlice'
import axios from 'axios'


const Signup = () => {
  const dispatch = useDispatch()

  const store = () => {

    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const pass = document.getElementById("pass").value

    axios.post(`http://localhost:5000/signup`, {
      Name: name,
      Email: email,
      Pass: pass
    })
      .then(res => {
        const validify = res.data;
        console.log(validify)
        if (validify) {
          document.getElementById("myModal").classList.add("model_display");
        }
        else{
          document.getElementById("email_exist").classList.remove("form-incorrect-hidden");
        }
      })
  }

  window.onclick = function(event) {
    if (event.target === document.getElementById("myModal")) {
      document.getElementById("myModal").style.display = "none";
    }
  }

  return (
    <div className="parentcontainer">
      <img src="background.png" alt="Avatar" className="background_image"></img>
      <header className="form-header"></header>

      <div id="myModal" className="modal">
        <div className="modal-content">
            {/* <span className="close" id="close">&times;</span> */}
            <p>Congratulations on successfully creating your account on Quarum, to procide further, login to your account.</p>
            <button className="model_button" onClick={() => dispatch(login())}>Login Page</button>
        </div>
        
      </div>

      <div className="maincontainer">
        <div className="form_container">
          <div className="imgcontainer">
            <img src="QUA_2.png" alt="Avatar"></img>
          </div>

          <div className="container">
            <br/>
            <label>
              <b>Name</b>
            </label>
            <input className="form-input" type="text" placeholder="Enter Name" name="name" id="name" required></input>
            <br/>
            <label className="sign_title_margin">
              <b>Email</b>
            </label>
            <input className="form-input" type="text" placeholder="Enter Email" name="email" id="email" required></input>
            <span className="form-incorrect-hidden form-incorrect" id="email_exist"> Email already in use</span>
            <br/>
            <label className="sign_title_margin">
              <b>Password</b>
            </label>
            <input
              className="form-input"
              type="password"
              placeholder="Enter Password"
              name="pass"
              id="pass"
              required></input>
            <br/><br/>
            <button onClick={store} className="but-enlarge form-button">Sign Up</button>
          </div>
          <hr className="form-hr"/>
          <div className="container sign_container">
            Already have an account ?
            <a href="#" onClick={() => dispatch(login())}>
              Log-in</a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Signup