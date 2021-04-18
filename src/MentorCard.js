import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./MentorCard.css";


function MentorCard(id) {
    const [mentorData, setMentorData] = useState();
    const num = id.id;
    useEffect(() => {
        getMentorData()
    }, [mentorData]);
    
    async function getMentorData() {
        const response = await axios.get(`http://catalysed-iteration1.el.r.appspot.com/test/mentors/${num}`);
        console.log(response.data);
        setMentorData(response.data);
    }
    return(
        
        <div>
            <div className= "Mentor-list">
            <h1>Mentor Details</h1> 
            {mentorData &&
            <div>
            <ul>
                <li><h2>{mentorData.firstName} {mentorData.lastName}</h2></li>
                {mentorData.specializations.length>0 &&
                <li><b>Specializtions:</b></li> }
                {mentorData.specializations.map((spec) => (
                    <li>{spec}</li>
                ))}
                <li><b>E-mail: </b>{mentorData.email}</li>
                <li><b>Gender: </b>{mentorData.gender}</li>
                <li><b>Location: </b>{mentorData.location}</li>
                
            </ul>
            </div>
            }
            </div>
        </div>
    )
}
export default MentorCard;