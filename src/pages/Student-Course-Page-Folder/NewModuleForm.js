import React from 'react';

// Citation for making elements appear and disappear on click: https://www.youtube.com/watch?v=uXk62ZgPH-4&ab_channel=Accessworld
// learnt how to add and remove elements dynamically from Code Academy
export default function NewModuleForm({newModule, handleChange, handleSubmit}) {
    

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input
            name=  "moduleName"
            className= {"moduleInput"}
            value = {newModule.moduleName}
            placeholder = "Insert Text"
            onChange = {handleChange}
            />
            <button type = "submit" className="submitButton">Submit</button>
          </form > 
          </>
     );
};