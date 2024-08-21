import React from 'react';
import './App.css';
import ComponentC from './components/ComponentC';

export const UserContext = React.createContext('')
export const TestContext = React.createContext('')

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={'ankit'}>
        <TestContext.Provider value={'test value'}>
          <ComponentC/>
        </TestContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
