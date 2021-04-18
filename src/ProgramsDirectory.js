import React, { useState, useEffect } from "react";
import ProgramCard from './ProgramCard';
import { Switch, Route, Redirect, Link } from "react-router-dom";
import ProgramDetails from './ProgramDetails';
import './ProgramsDirectory.css' ;
import MentorCard from './MentorCard';
import SearchBar from './SearchBar';



function ProgramsDirectory() {
    
    const [programDetails, setProgramDetails] = useState();
    const [searchValue, setSearchValue] = useState("");
    const [mentorCount, setMentorCount] = useState(0);
    

  
    useEffect(() => {
        getDeta()
    }, [programDetails]);
    
    async function getDeta() {
        await fetch('http://catalysed-iteration1.el.r.appspot.com/test/programs/')
                .then(response => {
                    if(response.ok) {
                        return response.json()
                    }
                    throw response;
                }).then(data => {
                    setProgramDetails(data);
                })
                .catch(error => {
                    console.error("Error Fetching Data: ", error);
                })
    }
    const mentorArray = Array.from(Array(mentorCount + 1).keys());

    const searchHandler = value => {
        setSearchValue(value);
      };
    
    let filteredPrograms = (programDetails ? programDetails : []).filter(item => {
        return item.name.toLowerCase().includes(searchValue);
    }, []);



    return (
        <div >
            <Switch>
                {programDetails && mentorArray.map((i, id) => (
                <Route exact path={`/mentors/${id}`}>
                    <MentorCard id={id}/>
                </Route>
                ))}
                {programDetails && programDetails.map((programData, id) => (
                    <Route exact path={`/details/${id+1}`}>
                         <ProgramDetails id={id+1} mentorCount={mentorCount} setMentorCount={setMentorCount}/>
                    </Route>
                ))}

                <Route exact path="/">
                    <h1>Programs Directory</h1>
                    <SearchBar searchHandler={searchHandler} />
                    <div className='Directory'>
                    {programDetails && 
                    (searchValue === '' ? programDetails : filteredPrograms).map((programData) => (
                    <ProgramCard
                        {...programData}
                    />))}
                    </div>
                </Route>
              </Switch>
        </div>
    );
  }
  export default ProgramsDirectory;