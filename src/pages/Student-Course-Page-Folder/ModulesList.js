import React, {useState} from 'react';
import "./ModulesList.css";
// learnt how to add and remove elements dynamically from Code Academy
// Citation for drop down: https://www.w3schools.com/howto/howto_css_dropdown.asp
export default function ModulesList({allModules}) {
    const [show, setShow] = useState(false);
    return (
        <div>
            <ul className= {'module-list'}>
                        {allModules.map(( { moduleName, moduleId}) => (
                            <li key={moduleId} className = {'moduleElement'}>
                                <button onClick = {() => setShow(!show)} className = {"moduleName"}>moduleName</button>
                                {show && 
                                    <div className = "content">Content One</div>
                                }
                            </li>
                        ))}
                    </ul>
        </div>
       
    )
}
