import React, { useState } from 'react'

import '../CSS/Equipment.css'
import {Link, Router, useRouteMatch} from "react-router-dom";
// import {useNavigate} from "react-router-dom"



function Equipment() {

    // const navigate = useRouteMatch();

    var vari = ""
    // function setbl(arg)
    // {
    //     console.log(arg)
    // }

    const [bl,setbl] = useState(false);

    var vari = "";

    if(bl===true)
    {
        vari = "open-popup"
    }




  return (
    <div>
<div class="container">
    <br/><br/><br/><br/><br/><br/><br/><br/>
    <Link to='/eqlogin/1'>
        <img className="img" src="rotivator_img.png" alt="rotivator"/>
    </Link>
    <Link to='/eqlogin/2'>
        <img className="img" src="plough_img.png" />
    </Link>
    <Link to='/eqlogin/3'>
        <img className="img" src="cultivator_img.png" alt="\"/>
    </Link>
    <Link to='/eqlogin/4'>
        <img className="img" src="trailor2.png" alt="rotivator"/>
    </Link>
    <Link to='/eqlogin/5'>
        <img className="img" src="seed_driller.png" alt="rotivator"/>
    </Link>


    <button class="buttons"  onclick="openPopup()">ROTIVATOR</button>
    <button class="buttons" role={"button"} style = {{"margin-left":  "60px"}} >PLOUGH</button>
    <button class="buttons"  style = {{"margin-left":  "70px"}} >CULTIVATOR</button>
    <button class="buttons" style = {{"margin-left":  "60px"}} >TRAILOR</button>
    <button class="buttons"  style = {{"margin-left":  "60px"}} >SEED DRILLER</button>
    <div className={"popup1 "+vari}  id="popup1" style={{"margin-left": "30%","top": "250px"}}>
    <p class = "popup_para">Do you want to continue?</p>
    <Link to="/eqlogin"><button type="button" name="button" class="yes common" style = {{"margin-left": "180px"}} >yes</button></Link>
    <button type="button" name="button" class="no common" style = {{" margin-left": "50px"}} >no</button>

    </div>
    </div>

    </div>
  )
}

export default Equipment