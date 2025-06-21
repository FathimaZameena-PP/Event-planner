
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Events from './pages/Events';
import AddEvent from './pages/AddEvent';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element= {<Home/>} />
          <Route path="/events" element= {<Events/>} />
          <Route path="/add-event" element= {<AddEvent/>} /> 
        </Routes>      
      </div>
    </BrowserRouter>
  );
}

export default App;
