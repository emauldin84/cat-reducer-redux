import React, { useContext } from 'react'
import StateContext from '../context/index'

const Activity = () => {
    const value = useContext(StateContext)
    console.log(value)
    return (
        <div>
            <h1>Cat-Dog reducer</h1>
            <p>{value.name} is {value.activity}</p> 
            <ul>
                <li>
                    {/* <button onClick={''}>Eat</button> */}
                </li>
                <li>
                    {/* <button onClick={''}>Nap</button> */}
                </li>
                <li>
                    {/* <button onClick={''}>Play</button> */}
                </li>
            </ul>
        </div>
    )
}


export default Activity