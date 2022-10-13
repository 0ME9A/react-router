import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import Contact from './components/Contact';
import About from './components/About';
import Error from './components/Error';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <header className="App-header">


        <Routes>
          <Route path="/" element={<Nav />} >
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
          </Route>
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>


      </header>
    </div>
  );
}

export default App;
