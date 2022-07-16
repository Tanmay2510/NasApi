import './App.css';
import Allsection from './Components/Allsection';
import {Routes, Route} from 'react-router-dom';
import Basicbg from './Components/Basicbg';
import Model from './Components/Model';


function App() {
  return (
    <div className="App">
    <Routes>
    <Route exact path ="/" element={      <Allsection/>   }>    </Route>
    <Route exact path ="/Earth" element={      <Basicbg />   }> </Route>

    </Routes>
    </div>
  );
}

export default App;
