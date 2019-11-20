import React, { useContext } from 'react'
import StateContext from '../context/index'

const Activity = () => {
    const [value, dispatch] = useContext(StateContext)

    const handleClick = (e) => {
        dispatch({
            type: 'changeActivity',
            activity: e.target.value
        })
    }

    const handleChange = (e) =>{
        dispatch({
            type:'changeName',
            newName: e.target.value
        })
    }
    return (
        <div>
            <h1>The Cat-Dog activity monitor</h1>
            <p>{value.name} is {value.activity}</p>
            <p>
                <input type='text' name='newName' placeholder='Name' onChange={handleChange}/>
            </p>
            <ul>
                <li>
                    <button onClick={handleClick} value='eating'>Eat</button>
                </li>
                <li>
                    <button onClick={handleClick} value='napping'>Nap</button>
                </li>
                <li>
                    <button onClick={handleClick} value='playing'>Play</button>
                </li>
            </ul>
        </div>
    )
}


export default Activity