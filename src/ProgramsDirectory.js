import React, { useState, useEffect } from "react";
import ProgramCard from './ProgramCard';
import { Switch, Route, Redirect, Link } from "react-router-dom";
import ProgramDetails from './ProgramDetails';
import './ProgramsDirectory.css' ;
import SearchBar from './SearchBar';
import MentorCard from './MentorCard';



function ProgramsDirectory() {
    
    const [programDetails, setProgramDetails] = useState();
    const [input, setInput] = useState('');
    const [filteredProgramDetails, setFilteredProgramDetails]= useState();
  
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
                    setFilteredProgramDetails(data);
                })
                .catch(error => {
                    console.error("Error Fetching Data: ", error);
                })
    }

    const updateInput = async (input) => {
        const filtered = programDetails.filter(program => {
         return program.name.toLowerCase().includes(input.toLowerCase())
        })
        setInput(input);
        setFilteredProgramDetails(filtered);
     }

    return (
        <div >
            <Switch>
                {programDetails && programDetails.map((programData, id) => (
                <Route exact path={`/mentors/${id}`}>
                    <MentorCard id={id}/>
                </Route>
                ))}
                {programDetails && programDetails.map((programData, id) => (
                    <Route exact path={`/details/${id}`}>
                         <ProgramDetails id={id} />
                    </Route>
                ))}

                <Route exact path="/">
                    <h1>ProgramsDirectory</h1>
                    <SearchBar 
                    input={input} 
                    onChange={updateInput}
                    />
                    <div className='Directory'>
                    {filteredProgramDetails && filteredProgramDetails.map((programData) => (
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