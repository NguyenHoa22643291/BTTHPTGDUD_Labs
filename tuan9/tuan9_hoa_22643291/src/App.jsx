import { useState } from 'react'
import CounterUseReducer from './components/CounterUseReducer'
import './App.css'
import { Provider } from 'react-redux'
import store from './store/store'
import storetoolkit from './store/storeToolkit'
import CounterUseRedux from './components/CounterUseRedux'
import CounterUseReduxToolkit from './components/CounterUseReduxToolkit'
function App() {



  return (
    <>
    <Provider store={store}>
    <div style={{padding:20}}>
      <CounterUseReducer/>
      <hr />
      <CounterUseRedux/>
      <hr />
    </div>
    </Provider>
          {/* Redux Toolkit */}
     <Provider store={storetoolkit}>
        <div>
          <CounterUseReduxToolkit />
        </div>
      </Provider>
    </>
  );
};


export default App;
