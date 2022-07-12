import './App.css';
import Allsection from './Components/Allsection';
import City from './Components/City';
import "slick-carousel/slick/slick.css"; 
import {Routes, Route} from 'react-router-dom';

import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
    <Routes>
    <Route exact path ="/" element={      <Allsection/>   }>    </Route>
<Route exact path ="/Planets" element={      <City />   }> </Route>

         </Routes>
    </div>
  );
}

export default App;
