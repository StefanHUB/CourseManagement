import React from 'react';
import axios from 'axios';


function ModulePanel() {

    const [moduleName, setModuleName] = React.useState('');
    const [moduleStartDate, setStartDate] = React.useState('');
    const [moduleEndDate, setEndDate] = React.useState('');
    const [moduleTutor, setTutor] = React.useState('');
    const [moduleGrade, setGrade] = React.useState('');

    function fetchModuleRecords(){
        axios.get('http://localhost:8080/Modules')
        .then( (response) => {
            // handle success
            var resData = response.data;
            let data = JSON.stringify(resData);
            window.alert("Response recieved from server = " + data);
        });
    }


    function saveModule(){
        const value = {
            name: moduleName,
            startDate: moduleStartDate,
            endDate: moduleEndDate,
            tutor: moduleTutor,
            grade: moduleGrade,
            
        };

        axios.post('http://localhost:8080/module', value)
        .then( (response) => {
            // handle success
            var resData = response.data;
            let data = JSON.stringify(resData);
            window.alert("Response recieved from server = " + data);
        });
    }

    
    function displayModuleHandler(){
        fetchModuleRecords();
    }

    function saveModuleHandler(){
        saveModule();
    }

    return (    
        <div>
            <h2 style={{color:"orange"}}>Add Module Details:</h2>
            <h5 style={{color:"purple"}}>Module Name:</h5>
            <input type="text" placeholder='Module Name' value ={moduleName} onChange ={e => setModuleName(e.target.value) }/>
            <h5 style={{color:"brown"}}>Module Start Date:</h5>
            <input type="text" placeholder='Module Start Date' value ={moduleStartDate} onChange ={e => setStartDate(e.target.value) }/>
            <h5 style={{color:"yellow"}}>Module End Date:</h5>
            <input type="text" placeholder='Module End Date' value ={moduleEndDate} onChange ={e => setEndDate(e.target.value) }/>
            <h5 style={{color:"teal"}}>Module Tutor:</h5>
            <input type="text" placeholder='Module Tutor' value ={moduleTutor} onChange ={e => setTutor(e.target.value) }/>
            <h5 style={{color:"red"}}>Module Grade:</h5>
            <input type="text" placeholder='Module Grade' value ={moduleGrade} onChange ={e => setGrade(e.target.value) }/>
            <br/>
            <button style={{color:"#00F"}} onClick={saveModuleHandler}>Save Module Details</button> 
            <br/>
            <h2 style={{color:"orange"}}>Show Modules:</h2>
            <button style={{color:"blue"}} onClick={displayModuleHandler}>Display Modules</button> 
        </div>
    );

}

export default ModulePanel;
