// examples from https://kentcdodds.com/blog/javascript-to-know-for-react

import React, { Component } from 'react'

// const a = 'hello'
// const b = 42
// const c = {d: [true, false]}
// console.log({a, b, c})
// // this is the same as:
// console.log({a: a, b: b, c: c})

let a = 'foo', 
    b = 42, 
    c = {};

// Shorthand property names (ES2015)
let o = {a, b, c}

// In other words,
console.log(o);
console.log((o.a === {a}.a)) // true
console.log({a}.a);
//in React:
function Counter({initialCount, step}) {
  const [count, setCount] = useCounter({initialCount, step})
  return <button onClick={setCount}>{count}</button>
}

function T01_js_for_react() {
  return (
    <div className="App">
      <header>
        <h2>T01 JS for React</h2>
      </header>
        <div>
            
        </div>
    </div>
  );
}

export default T01_js_for_react;
