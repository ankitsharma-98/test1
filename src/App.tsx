import React from 'react';
import './App.css';
import ComponentC from './components/ComponentC';
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';

export const UserContext = React.createContext('')
export const TestContext = React.createContext('')

function App() {
  return (
    <div className="App">
     <CounterTwo/>
    </div>
  );
}

export default App;
