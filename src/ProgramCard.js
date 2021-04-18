import { render } from "@testing-library/react";
import React from "react";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import "./ProgramCard.css";
import ProgramsDirectory from "./ProgramsDirectory";
import ProgramDetails from './ProgramDetails';

function ProgramCard({id, name, category, shortDescription, phase, startDate, duration}) {
    return(
        
        <div>
            <div className= "program-card">
            <ul>
                <li><h4>{name}</h4></li>
                <li>{category}</li>
                <li>{shortDescription}</li>
                <li>{phase}</li>
                <li>{startDate}</li>
                <li>{duration}</li>
                <Link to={`/details/${id}`}>View More!</Link>
            </ul>
            
            </div>
        </div>
    )
}
export default ProgramCard;