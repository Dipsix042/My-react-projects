import React, {useContext} from 'react'
import { UserContext } from './ComponentA';
// AND FROM COMPONENTC - COMPONENTD
import ComponentD from "./ComponentD";

function ComponentC() {

    const user = useContext(UserContext);

    return (
        <div className='box'>
            <h1>Component C</h1>
            <h2>{`Hello ${user}`}</h2>
            <ComponentD/>
        </div>
    );

}

export default ComponentC;