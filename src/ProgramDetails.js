import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Mentor from './Mentor';
import './ProgramDetails.css';
import MentorCard from './MentorCard';

function ProgramsDetails({id}) {
    
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
            <h4>{programDetailData.name}</h4>
            <div>
            <ul>
                <li>{programDetailData.category}</li>
                <li>{programDetailData.shortDescription}</li>
                <li>{programDetailData.phase}</li>
                <li>{programDetailData.startDate}</li>
                <li>{programDetailData.duration}</li>
                <li>{programDetailData.description}</li>
                <li>{programDetailData.programSize}</li>
            </ul>
            <h2>Program Mentors</h2>
            {/* <Switch>
            {programDetailData && programDetailData.mentors.map((mentor, id) => (
            <Route exact path={`/mentors/${id}`}>
                <MentorCard id={id}/>
            </Route>))
            }
            </Switch> */}
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