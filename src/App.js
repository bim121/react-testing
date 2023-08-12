import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(null)
  const [toggle, setToggle] = useState(false)

  const onClick = () => setToggle(prev => !prev)

  useEffect(() => {
    setTimeout(() => {
      setData({})
    }, 100)
  }, [])

  return (
    <div>
      {toggle === true && <div data-testid="toggle-elem">toggle</div>}
      {data && <div>data</div>}
      <h1 style={{color: 'red'}}>Hello world</h1>
      <button data-testid="toggle-btn" onClick={onClick}>click me</button>
      <input type="text" placeholder='input value...'/>
    </div>
  );
}

export default App;
