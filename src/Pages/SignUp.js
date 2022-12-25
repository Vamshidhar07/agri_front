import React, {useEffect, useState} from 'react'
import '../CSS/SignUp.css';
import {Link} from "react-router-dom";


function SignUp() {
    const classcontainer = {

        width: "400px",
        marginLeft: "1100px"
    }


    function signup111() {
        var url = `http://localhost:5000/signup?email=${email}&password=${password}&name=${name}&phone=${phone}&address=${address}`

            fetch(url)
                .then((response) => console.log(response))

        return undefined

    }

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [phone,setPhone] = useState("")
    const [address,setAddress] = useState("")
    const [name,setName] = useState("")
    return (
        <>
            <div className="bg-img">
                <form action="action_page.php">
                    <div className="container" style = {classcontainer}>
                        <h1 className = "signup">Sign Up</h1>
                        <p className = "please"><b>Please fill in this form to create an account.</b></p>
                        <hr/>

                        <label className = " email" for="email"><b>Email</b></label>
                        <input type="text" placeholder="Enter Email" onChange={event => setEmail(event.target.value)}   required/>


                        <label className=" email" htmlFor="email"><b>Name</b></label>
                        <input type="text" placeholder="Enter Name" onChange={event => setName(event.target.value)} required/>

                        <label className=" email" htmlFor="email"><b>Phone</b></label>
                        <input type="text" placeholder="Enter Phone" onChange={event => setPhone(event.target.value)} required/>


                        <label className = "email" for="psw"><b>Address</b></label>
                        <input type="password" placeholder="Enter Address" onChange={event => setAddress(event.target.value)} required/>


                        <label className=" password" htmlFor="email"><b>Password</b></label>
                        <input type="text" placeholder="Set a password" onChange={event => setPassword(event.target.value)} required/>

                        <div className="clearfix">
                            <Link to="/login">
                                <button type="button" className="cancelbtn">cancel</button>
                            </Link>
                            <Link to='/login'>
                                <button type="submit" onClick={()=>{signup111()}}>Sign Up</button>
                            </Link>

                        </div>
                    </div>
                </form>
            </div>

        </>
    );
}

export default SignUp