import React, { useState, useMemo } from 'react';
import './style.css';
import GithubClass from './GithubSample/GithubClass';
// import Github from './GithubSample/Github';
// import SimpleClass from './SimpleSample/SimpleClass';
// import Simple from './SimpleSample/Simple';   
import Login1 from './LoginSample/Login1';
// import Login2 from './LoginSample/Login2';
// import Login3 from './LoginSample/Login3';
 

export default function App() {

  const [n, setN] = useState([1,2,3]);
  var items = useMemo(() => n.map(x => `Item ${x}`), [n])

  return (
    <div>
      <button onClick={() => {
        setN(n => [...n, 1])
      }}> Add + 1 </button>


      <ul>
        {items.map(item => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}
