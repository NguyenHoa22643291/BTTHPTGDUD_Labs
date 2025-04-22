//configureStore mac dinh thiet lap cho phep su dung
//redux devtool de debug va theo doi qua trinh cap nhat state cx nhu thiet lap san mot so middleware

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../ReduxTanggiam/reducers/CounterSlide";
import todoReducer from "../slice/todoSlice"
import themeReducer from '../slice/themeSlice'
import cartReducer from '../slice/cartSlice'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todoReducer,
    theme: themeReducer,
    cart: cartReducer
  },
});

export default store; 
