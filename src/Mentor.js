import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./Mentor.css";
import MentorCard from './MentorCard';


function Mentor({id, firstName, lastName, profilePic, specializations, email}) {

    return(
        
        <div>
            <div className= "mentor-list">
            <ul>
                <li><h4>{firstName} {lastName}</h4></li>
                {specializations.map((spec) => (
                    <li>{spec}</li>
                ))}
                <li>{specializations[0]}</li>
                <li>{email}</li>
                <Link to={`mentors/${id}`}>View More!</Link>
            </ul>
            </div>
            <Switch>
            <Route exact path={`mentors/${id}`}>
                <MentorCard id={id}/>
            </Route>
            </Switch>
        </div>
    )
}
export default Mentor;