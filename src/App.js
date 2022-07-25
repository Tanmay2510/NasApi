import './App.css';
import Allsection from './Components/Allsection';
import {Routes, Route} from 'react-router-dom';
import Basicbg from './Components/Basicbg';
import LinkPlanet from './Components/LinkPlanet';
import MarsPhoto from './Components/MarsPhoto';
import Rover from './Components/Rover';
import WHAT from "./Components/WHAT";
import Nav from './Components/Nav';
function App() {
  return (
    <div className="App">
    <Routes>
    <Route exact path ="/Marsphoto" element={   <MarsPhoto />   }>    </Route>

    <Route exact path ="/" element={      <Allsection/>   }>    </Route>
    <Route exact path ="/Earth" element={      <Basicbg />   }> </Route>
    <Route exact path ="/Mercury" element={      <Basicbg />   }> </Route>
    <Route exact path ="/Venus" element={      <Basicbg />   }> </Route>
    <Route exact path ="/Mars" element={      <Basicbg />   }> </Route>
    <Route exact path ="/Jupiter" element={      <Basicbg />   }> </Route>
    <Route exact path ="/Saturn" element={      <Basicbg />   }> </Route>
    <Route exact path ="/Uranus" element={      <Basicbg />   }> </Route>
    <Route exact path ="/Neptune" element={      <Basicbg />   }> </Route>
    <Route exact path ="/Offers" element={      <LinkPlanet />   }> </Route>
    <Route exact path = "/curiosity" element ={<Rover />}></Route>
    <Route exact path = "/spirit" element ={<Rover />}></Route>
    <Route exact path = "/opportunity" element ={<Rover />}></Route>
    <Route exact path = "/perseverance" element ={<Rover />}></Route>
    <Route exact path = "/WHAT" element ={<WHAT />}></Route>
    <Route exact path ="/Planets" element={ <Nav />}></Route>
    </Routes>
    </div>
  );
}

export default App;
