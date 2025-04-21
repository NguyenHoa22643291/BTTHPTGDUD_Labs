import { useState } from 'react'
import CounterUseReducer from './components/CounterUseReducer'
import './App.css'
import { Provider } from 'react-redux'
import store from './store/store'
import CounterUseRedux from './components/CounterUseRedux'

function App() {



  return (
    <Provider store={store}>
    <div style={{padding:20}}>
      <CounterUseReducer/>
      <hr />
      <CounterUseRedux/>
    </div>
    </Provider>
  );
};


export default App;
