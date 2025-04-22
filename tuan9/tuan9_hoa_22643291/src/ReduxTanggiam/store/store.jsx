//configureStore mac dinh thiet lap cho phep su dung
//redux devtool de debug va theo doi qua trinh cap nhat state cx nhu thiet lap san mot so middleware

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reducers/CounterSlide";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store; 
