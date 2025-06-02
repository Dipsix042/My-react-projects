import React, {useContext} from 'react'
import { UserContext } from './ComponentA';

// AND FROM COMPONENTB - COMPONENTC

import ComponentC from "./ComponentC";


function ComponentB() {
    const user= useContext(UserContext);

    return (
        <div className='box'>
            <h1>Component B</h1>
             <h2>{`Hello ${user}`}</h2>
            <ComponentC/>
           
        </div>
    );

}

export default ComponentB;