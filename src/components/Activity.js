import React, { useContext } from 'react'
import StateContext from '../context/index'

const Activity = () => {
    const [value, dispatch] = useContext(StateContext)
    console.log('activity value', value)

    const handleClick = (e) => {
        dispatch({
            type: 'changeActivity',
            activity: e.target.value
        })
    }

    const handleChange = (e) => {
        dispatch({
            type:'changeName',
            newName: e.target.value
        })
    }
    
    const handleModeChange = () => {
        dispatch({
            type:'setMode',
            mode: !value.isDarkMode
        })
    }

    let mode = value.isDarkMode ? 'light mode' : 'dark mode'
    let style = value.isDarkMode ? 'ActivityContainer dark' : 'AActivityContainer'
    return (
        <div className = {style}>
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
            <button onClick={handleModeChange}>{mode}</button>
        </div>
    )
}


export default Activity