import React, { useState, useEffect } from "react";
import "./MentorCard.css";


function MentorCard(id) {
    const [mentorData, setMentorData] = useState();
    console.log(id);
    useEffect(() => {
        getMentorData()
    }, [mentorData]);
    
    async function getMentorData() {
        await fetch(`http://catalysed-iteration1.el.r.appspot.com/test/mentors/${id}`)
                .then(response => {
                    if(response.ok) {
                        return response.json()
                    }
                    throw response;
                }).then(data => {
                    setMentorData(data);
                })
                .catch(error => {
                    console.error("Error Fetching Data: ", error);
                })
    }
    return(
        
        <div>
            <div className= "Mentor-list">
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
            </div>
        </div>
    )
}
export default MentorCard;