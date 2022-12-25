import React, { useState } from 'react'

import '../CSS/Equipment.css'
import {Link, useParams} from "react-router-dom";
import {useCookies} from "react-cookie";



function Eqlogin() {
    const params = useParams();
    const [cookies, setCookie] = useCookies(['user']);


    const eq={
        1:"Rotivator",
        2:"Plough",
        3:"Cultivator",
        4:"Seed driller",
        5:"Trailer"
    }

    function submit() {
        var url = `http://localhost:5000/forrent?equipment_id=${params.id}&user_id=${cookies.id}&rent_per_day=${parseInt(rentPerDay.toString())}&advance=${parseInt(advance.toString())}&from_date=${startDate}&to_date=${endDate}`

        fetch(url)
            .then((response) => console.log(response))
        return undefined
    }


    const [rentPerDay,setRent] = useState(0)
    const [advance,setAdvance] = useState(0)
    const [startDate,setStartDate] = useState("")
    const [endDate,setEndDate] = useState("")





            return (
            <div>
                <label className="color">Equipment Name :</label>
                <input id="fname" placeholder={eq[params.id]} disabled type="text"/>
                    <label className="color">Rent per day:</label>
                    <input id="email" placeholder="Enter rent per one day" onChange={e=>{setRent(e.target.value)}} type="number"/>
                        <label className="color">Rent per 10-days:</label>
                        <input id="contact" placeholder={rentPerDay*10} type="text"/>
                            <label className="color">Advance Amount:</label>
                            <input id="contact" placeholder=" " onChange={e=>{setAdvance(e.target.value)}} type="number"/>
                                <label className="color">Available dates: From</label>
                                <input id="contact" placeholder=" " onChange={e=>{setStartDate(e.target.value)}} type="date"/>
                                    <label className="color">Available dates: To</label>
                                    <input id="contact" placeholder=" " onChange={e=>{setEndDate(e.target.value)}} type="date"/>
                            <Link to="/vendor">
                                <button id="submit" type="submit" onClick={submit}  value="Submit"/>
                            </Link>

            </div>



            )
        }


export default Eqlogin