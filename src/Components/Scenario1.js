import React, { useState } from 'react';
import Choice from './Choice';
const Scenario1 = (props) => {
    return (
        <div>
            <h4>Gandalf offers you the One Ring. It is cool to the touch and dark script can be seen around it's edges.</h4>
            <div className='choice-container'>
                <Choice click={props.handleFailure} value="Run Away" />
                <Choice click={props.counter} value="Take the ring" />
            </div>
        </div>
    )
}

export default Scenario1;