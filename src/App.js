import './App.css';
import Count from './js/components/Count';
import Increment from './js/components/Increment';
import Decrement from './js/components/Decrement';

function App() {
  return (
    <div className="app">
     <h1>React Redux Counter</h1>
     <div>
       <Decrement />
      <Count />
      <Increment />
     </div>     
    </div>
  );
}

export default App;
