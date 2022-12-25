import React from 'react';
import '../CSS/Login.css';
import {Link} from "react-router-dom";
import SignUp from "./SignUp";
import {useState} from "react";
import {useCookies} from "react-cookie";

function Login() {
  function login() {
    var url = `http://localhost:5000/login?username=${email}&password=${password}`

    fetch(url)

        .then((response) => response.json())
        .then((data) => {
          console.log(data);
            setCookie('Name', data.name, { path: '/' });
            setCookie('id', data.id, { path: '/' });
          setCookie('Phone', data.phone, { path: '/' });
          setCookie('Address', data.address, { path: '/' });
          setCookie('email', data.username, { path: '/' });
        })

    return undefined
  }

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
    const [cookies, setCookie] = useCookies(['user']);


    return (
    <>
<div class="bg-img">
   
    <div class="container">
     <div class="topnav">
      <a href="#home">Home</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
    </div>
  </div>
  <form action="action_page.php" method="post">
  <div class="imgcontainer">
    <img src=""  alt="" class="avatar"/>
  </div>

  <div class="container1" id = "home">
    <label for="uname"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="uname" onChange={event => setEmail(event.target.value)} required/>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" onChange={event => setPassword(event.target.value)} required/>
  <br/>
  <br/>
  <Link to="/vendor"><button name="Login" id="Button" value="login" onClick={()=>login()}/></Link>
    <br/>
    <br/>
    <br/>
  </div>

  <div class="container1">
    <button type="button" class="cancelbtn">Cancel</button>
    <Link to="/signup">
      <span className="signup"> sign up</span>
    </Link>

  </div>
  </form>
  </div>
  <div class="bg-img1" id="contact">
    <div class="row">
      <div class="col-md-5">

        <br/>
        <br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <p class = "name"> <b>Raj Charan Reddy</b></p>
        <p class="number"><b>+91 6281388344</b></p>
        <p class="mail"><b>rajcharanreddy2002@gmail.com</b></p>
      </div>
<div class="col-md-4">
  <br/><br/><br/>
  <p class = "name"> <b>Vamshidhar Rao</b></p>
  <p class="number"><b>+91 9059031725</b></p>
  <p class="mail"><b>dugyalavamshidharao@gmail.com</b></p>
</div>
<div class="col-md-3">
  <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
  <p class = "name"> <b>Rakesh Reddy</b></p>
  <p class="number"><b>+91 8367750654</b></p>
  <p class="mail"><b>rakeshreddy2126@gmail.com</b></p>
</div>
    </div>
    </div>
    <div class="bottom-container" id="about">
      <br/>
      <br/><br/><br/><br/><br/><br/>
<h1 class = "about">ABOUT..</h1>
<br/><br/><br/>
<p class="para">It's a user friendly website and it plays a role of mediator in between farmer and vendor. This website helps the customers to leverage and vending farming equipments which are available and not being used for a certain span of time.</p>
    </div>

    </>
  )
}

export default Login