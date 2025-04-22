// import { useState } from 'react'
// import CounterUseReducer from './ReduxTanggiam/components/CounterUseReducer'
// import './App.css'
// import { Provider } from 'react-redux'
// import storeRedux from './ReduxTanggiam/store/storeRedux'
// import store from './ReduxTanggiam/store/store'
// import CounterUseRedux from './ReduxTanggiam/components/CounterUseRedux'
// import CounterUseReduxToolkit from './ReduxTanggiam/components/CounterUseReduxToolkit'
// function App() {



//   return (
//     <>
    // <Provider store={storeRedux}>
    // <div style={{padding:20}}>
    //   <CounterUseReducer/>
    //   <hr />
    //   <CounterUseRedux/>
    //   <hr />
    // </div>
    // </Provider>
    //       {/* Redux Toolkit */}
    //  <Provider store={store}>
    //     <div>
    //       <CounterUseReduxToolkit />
    //     </div>
    //   </Provider>
//     </>
//   );
// };


// export default App;

import React, { useState } from 'react';
import Counter from './Cau1/Counter';
import { Provider } from 'react-redux';
import store from './store/store'
import CounterUseReducer from './ReduxTanggiam/components/CounterUseReducer'
import './App.css'
import storeRedux from './store/storeRedux'
import CounterUseRedux from './ReduxTanggiam/components/CounterUseRedux'
import CounterUseReduxToolkit from './ReduxTanggiam/components/CounterUseReduxToolkit'
import Todo from './Cau2/TodoList';
// import ThemeToggle from './Cau3/ThemeToggle';
// import Cart from './Cau4/Cart';
// import Auth from './Cau5/Auth';

const App = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);

  const handleFeatureClick = (featureName) => {
    setSelectedFeature(featureName);
  };

  const renderSelectedFeature = () => {
    switch (selectedFeature) {
      case 'Counter':
        return <Counter />;
      case 'Todo':
        return <Todo />;
      case 'ThemeToggle':
        return <ThemeToggle />;
      case 'Cart':
        return <Cart />;
      case 'Auth':
        return <Auth />;
      default:
        return (
          <div>
            <p>Vui lòng chọn một chức năng để hiển thị:</p>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <button
                className="border p-4 bg-white rounded hover:bg-gray-100"
                onClick={() => handleFeatureClick('Counter')}
              >
                Counter- đếm
              </button>
              <button
                className="border p-4 bg-white rounded hover:bg-gray-100"
                onClick={() => handleFeatureClick('Todo')}
              >
               TODO list- ds Việc
              </button>
              <button
                className="border p-4 bg-white rounded hover:bg-gray-100"
                onClick={() => handleFeatureClick('ThemeToggle')}
              >
                Thay đổi giao diện
              </button>
              <button
                className="border p-4 bg-white rounded hover:bg-gray-100"
                onClick={() => handleFeatureClick('Cart')}
              >
                Giỏ hàng
              </button>
              <button
                className="border p-4 bg-white rounded hover:bg-gray-100"
                onClick={() => handleFeatureClick('Auth')}
              >
                Xác thực
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="space-y-8 p-6">
          <Provider store={storeRedux}>
          <div style={{padding:20}}>
            <CounterUseReducer/>
            <hr />
            <CounterUseRedux/>
            <hr />
          </div>
          </Provider>
                {/* Redux Toolkit */}
          <Provider store={store}>
              <div>
                <CounterUseReduxToolkit />
              </div>
            </Provider>
      <Provider store={store}>
      {renderSelectedFeature()}
      </Provider>
    </div>
  );
};

export default App;