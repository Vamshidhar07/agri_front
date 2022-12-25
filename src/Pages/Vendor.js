import React from 'react';
import '../CSS/Vendor.css'
import {Link} from "react-router-dom";

function Vendor() {
  return (
    <div>

<div class="top-container">


<br/><br/><br/><br/><br/><br/><br/><br/>
<Link to="/equipment"><img class = "vendor_img" src="vendor2.png" alt="Vendor" style={{"margin-left": "300px"}}/></Link>
<img class = "byer_img" src="byer.png" alt="byer" style = {{"margin-left": "40px", "background-color": "white"}} onClick={()=>window.location.href= "http://localhost:5000/torent"}/>

<br/><br/>
<h1 class = "toRent" style={{"margin-left": "400px"}}><a href="equipment.html">TO RENT</a></h1>
<h1 style={{"margin-left": "180px"}} onClick={()=>window.location.href= "http://localhost:5000/torent"}>FOR RENT</h1>
</div>

</div>
    
  )
}

export default Vendor