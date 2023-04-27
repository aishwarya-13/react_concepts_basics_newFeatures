
import './App.css';
import React from 'react';
//import HOCFunctionality from './components/hoc-example-1/HOCFunctionality';
//import HOCFunctionalityEx2 from './components/hoc-example-2/HOCFunctionalityEx2';
import Table from './components/table/table';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Table title={`Users table`}/>
      </header>
    </div>
  );
}

export default App;
