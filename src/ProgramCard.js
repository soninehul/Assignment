import React from "react";
import { Link } from "react-router-dom";
import "./ProgramCard.css";


function ProgramCard({id, name, category, shortDescription, phase, startDate, duration}) {
    return(
        
        <div>
            <div className= "program-card">
            <ul>
                <li><h2>{name}</h2></li>
                <li><b>Category:</b> {category}</li>
                <li><b>Description:</b> {shortDescription}</li>
                <li><b>Phase:</b> {phase}</li>
                <li><b>Start Date:</b> {startDate}</li>
                <li><b>Duration:</b> {duration}</li>
                <div className= "program-links">
                <Link to={`/details/${id}`}>View More!</Link>
                </div>
            </ul>
            
            </div>
        </div>
    )
}
export default ProgramCard;