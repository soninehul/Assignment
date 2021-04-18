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
        setMentorData(response.data);
    }
    return(
        
        <div>
            <div className= "Mentor-list">
            <h1>Mentor Details</h1> 
            {mentorData &&
            <div>
            <img src={mentorData.profilePic} alt="Profile Picture" width= "300" height="250" ></img>
            <ul>
                <li><h2>{mentorData.firstName} {mentorData.lastName}</h2></li>
                {mentorData.specializations.length>0 &&
                <li><b>Specializtions:</b></li> }
                {mentorData.specializations.map((spec) => (
                    <li>{spec}</li>
                ))}
                <li><h4><b>E-mail: </b>{mentorData.email}</h4></li>
                <li><h4><b>Gender: </b>{mentorData.gender}</h4></li>
                <li><h4><b>Working Hours: </b></h4></li>
                <li><h4><b>Strating Time: </b>{mentorData.workingHours.startTime}</h4></li>
                <li><h4><b>Ending Time: </b>{mentorData.workingHours.endTime}</h4></li>
                <li><h4><b>Location: </b>{mentorData.location}</h4></li>
                
            </ul>
            </div>
            }
            </div>
        </div>
    )
}
export default MentorCard;