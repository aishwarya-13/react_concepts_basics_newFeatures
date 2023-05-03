
import './App.css';
import React from 'react';
//import HOCFunctionality from './components/hoc-example-1/HOCFunctionality';
//import HOCFunctionalityEx2 from './components/hoc-example-2/HOCFunctionalityEx2';
//import Table from './components/table/table';
import { Provider } from 'react-redux';
import store from './store';
import Cart from './components/redux-examples/cart';
import AppRenderProps from './components/render-props/App-render-props'
import AppContext from './components/context-example/App';
import AppRef from './components/refs-example/App-Ref';
import Controlled from './components/controlled-uncontrolled-components/controlled';
import Uncontrolled from './components/controlled-uncontrolled-components/uncontrolled';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <Uncontrolled/>
        </header>
      </div>
  );
}

// function App() {
//   return (
//     <Provider store={store}>
//       <div className="App">
//         <header className="App-header">
//           <Cart/>
//         </header>
//       </div>
//     </Provider>
    
//   );
// }

export default App;
