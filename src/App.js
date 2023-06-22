import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accueil from "./pages/Accueil/Accueil";
import Contact from './pages/Contact/Contact';
import Apropos from './pages/Apropos/Apropos';
import Budget from './pages/Budget/Budget';
import Nosapp from './pages/Nosapp/Nosapp';
import { BrowserRouter as Router } from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <Router>
    <div>
      <section>
      <Routes>
      <Route>
      <Route path="/" element={<Accueil/>}/>
       <Route path="/apropos" element={<Apropos/>}/>
       <Route path="/budget" element={<Budget/>}/>
       <Route path="/nosapp" element={<Nosapp/>}/>
       <Route path="/contact" element={<Contact/>}/>
      </Route>
    </Routes>
      </section>
    </div>
  </Router>
    </div>
  );
}

export default App;
