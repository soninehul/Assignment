import React, { useState, useEffect } from "react";
import Mentor from './Mentor';
import './ProgramDetails.css';

function ProgramsDetails({id, mentorCount, setMentorCount}) {
    
    const [programDetailData, setProgramDetailData] = useState();
    useEffect(() => {
        getDeta()
    }, [programDetailData]);
    
    async function getDeta() {
        await fetch(`http://catalysed-iteration1.el.r.appspot.com/test/programs/${id}`)
                .then(response => {
                    if(response.ok) {
                        return response.json()
                    }
                    throw response;
                }).then(data => {
                    setProgramDetailData(data);
                    if(programDetailData.mentors.length > mentorCount) {
                        setMentorCount(programDetailData.mentors.length);
                    }
                })
                .catch(error => {
                    console.error("Error Fetching Data: ", error);
                })
    }

    return (
        <div >
            <h1>ProgramsDetails</h1>
            {programDetailData && 
            <div>
            <h2>{programDetailData.name}</h2>
            <div>
            <ul>
                <li><h3><b>Category: </b>{programDetailData.category}</h3></li>
                <li><h3><b>Description: </b>{programDetailData.shortDescription}</h3></li>
                <li><h3><b>Phase: </b>{programDetailData.phase}</h3></li>
                <li><h3><b>Start Date: </b>{programDetailData.startDate}</h3></li>
                <li><h3><b>Duration: </b>{programDetailData.duration}</h3></li>
                <li><h3><b>Program Size: </b>{programDetailData.programSize}</h3></li>
            </ul>
            <br/>
            <h1>Program Mentors</h1>
            <div className= 'Program-details'>
            {programDetailData && programDetailData.mentors.map((mentor) => (
                         <Mentor {...mentor}/>

                ))}
            </div>
            </div>
            </div>
            }
        </div>
    );
  }
  export default ProgramsDetails;