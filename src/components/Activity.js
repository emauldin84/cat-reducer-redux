import React from 'react'


const Activity = () => {
    return (
        <div>
            <h1>Cat reducer</h1>
            <p>The cat is {activity}.</p> 
            <ul>
                <li>
                    <button onClick={catEat}>Eat</button>
                </li>
                <li>
                    <button onClick={catNap}>Nap</button>
                </li>
                <li>
                    <button onClick={catPlay}>Play</button>
                </li>
            </ul>
        </div>
    )
}



export default Activity