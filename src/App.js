import React from "react";
import "./App.css";

import Activity from './components/Activity'
import { StateProvider } from './context/index'

function App() {

  const initialState= {
    name: 'Koa',
    activity: 'dogging'
  }

  return (
    <div className="App">
      <StateProvider value={initialState}>
        <Activity />
      </StateProvider>
    </div>
  )

}

export default App;
