import React from "react";
import { Link } from "react-router-dom";
import "./Mentor.css";


function Mentor({id, firstName, lastName, profilePic, specializations, email}) {

    return(
        
        <div>
            <div className= "mentor-list">
            <ul>
                <li><h4>{firstName} {lastName}</h4></li>
                {specializations.length>0 &&
                <li><b>Specializtions:</b></li> }
                {specializations.map((spec) => (
                    <li>{spec}</li>
                ))}
                <li><b>E-mail:</b> {email}</li>
                <div className= "mentor-links">
                <Link to={`/mentors/${id}`}>View More!</Link>
                </div>
            </ul>
            </div>
        </div>
    )
}
export default Mentor;