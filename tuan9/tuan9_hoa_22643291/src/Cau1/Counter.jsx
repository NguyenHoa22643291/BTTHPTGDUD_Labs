import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "../ReduxTanggiam/reducers/CounterSlide";
import React from "react";

const Counter =()=>{
    const count = useSelector((state)=> state.counter.count);
    const dispatch  = useDispatch();
    return(
        <div className="flex flex-col items-center justify-center">
              <h3 className="font-bold">Câu 1 - CounterAPP</h3>
              <p className="text-xl font-semibold mb-6">Count: {count}</p>
              <div className="flex gap-4">
              <button onClick={() => dispatch(increment())} className="px-6 py-2 bg-green-400 hover:bg-green-600 transition">+</button>
              <button onClick={() => dispatch(decrement())} className="px-6 py-2 bg-blue-400 hover:bg-blue-600 transition">
                -
              </button>
              </div>
            </div>
    );
};
export default Counter;