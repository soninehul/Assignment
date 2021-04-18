import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./MentorCard.css";


function MentorCard(id) {
    const [mentorData, setMentorData] = useState();
    useEffect(() => {
        getMentorData()
    }, [mentorData]);
    
    async function getMentorData() {
        const response = await axios.get(`http://catalysed-iteration1.el.r.appspot.com/test/mentors/${id}`);
        console.log(response.data);
        setMentorData(response.data);
    }
    return(
        
        <div>
            <div className= "Mentor-list">
            {mentorData &&
            <ul>
                <h1>Mentor Details</h1>
                <li>{mentorData.firstName} {mentorData.lastName}</li>
                {mentorData.specializations.map((spec) => (
                    <li>{spec}</li>
                ))}
                <li>{mentorData.email}</li>
                <li>{mentorData.gender}</li>
                <li>{mentorData.location}</li>
                
            </ul>
            }
            </div>
        </div>
    )
}
export default MentorCard;