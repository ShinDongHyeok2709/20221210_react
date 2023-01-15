import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decre,
  DECREASE,
  decreasement,
  incre,
  INCREASE,
  increasement,
} from "../state/counter";

export default function Counter() {
  //const selector = useSelector((state) => state);

  //const { counter } = useSelector((state) => state);
  //const selector = useSelector((state) => state.counter.value);

  //console.log(selector);
  //const counter = useSelector((state) => state.counter.value);
  const counter = useSelector((state) => state.counter);
  console.log("counter : ", counter);
  const dispatch = useDispatch();
  console.log("increasement : ", increasement(10));
  return (
    <div>
      {/*
      <p>count : {selector}</p>
       
      <button onClick={() => dispatch({ type: INCREASE })}>+1</button>
      <button onClick={() => dispatch({ type: DECREASE })}>-1</button>
      
      <p>count : {counter}</p>
      <button onClick={() => dispatch(increasement(10))}>+1</button>
      <button onClick={() => dispatch(decreasement(10))}>-1</button>
      */}
      <p>count : {counter}</p>
      <button onClick={() => dispatch(incre({ amount: 10 }))}>+1</button>
      <button onClick={() => dispatch(decre({ amount: 10 }))}>-1</button>
    </div>
  );
}
