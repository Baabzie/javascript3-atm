import './App.css';
import { useState } from 'react';
import ATM from './components/ATM';

function App() {
  const [showATM, setShowATM] = useState(false);
  return (
    <div className="App">
      <h1>ATM-App</h1>
      <button onClick={() => {setShowATM((prevState) => !prevState)}}>{showATM ? "Hide ATM" : "Show ATM"}</button>
      {showATM && <ATM/>}
    </div>
  );
}

export default App;
