import React from 'react'
import {connect} from 'react-redux'

import {catNap, catEat, catPlay} from '../redux/activity'

const Activity = ({activity, catNap, catEat, catPlay}) => {
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

const mapStateToProps = state => {
    console.log(state.activities.activity)
    // const { activity } = state
    // return activity
    return {
        activity: state.activities.activity
    }
}
const mapDispatchToProps = dispatch => {
    return {
        catEat: () => dispatch(catEat()),
        catNap: () => dispatch(catNap()),
        catPlay: () => dispatch(catPlay())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Activity)