import React, { useReducer } from "react";
import "./App.css";

import Activity from './components/Activity'
import { StateProvider } from './context/index'


function App() {

  const initialState= {
    name: 'Koa',
    activity: 'dogging',
    isDarkMode: false
  }

  const reducer = (state, action) => {
    switch(action.type) {
      case 'changeActivity':
        return {
          ...state,
          activity: action.activity
        }
        case 'changeName':
          return {
            ...state,
            name: action.newName
          }
        case 'setMode':
          return {
            ...state,
            isDarkMode: action.mode
          }
      default:
        return state
    }
  }


  return (
    <div className='App'>
      <StateProvider value={useReducer(reducer, initialState)}>
        <Activity />
      </StateProvider>
    </div>
  )

}

export default App;
