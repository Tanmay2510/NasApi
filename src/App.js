import './App.css';
import Allsection from './Components/Allsection';
import {Routes, Route} from 'react-router-dom';
import Basicbg from './Components/Basicbg';


function App() {
  return (
    <div className="App">
    <Routes>
    <Route exact path ="/" element={      <Allsection/>   }>    </Route>
    <Route exact path ="/basic" element={      <Basicbg />   }> </Route>
    </Routes>
    </div>
  );
}

export default App;
