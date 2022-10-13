import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import Contact from './components/Contact';
import About from './components/About';
import Error from './components/Error';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} >
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
          </Route>


        </Routes>

      </header>
    </div>
  );
}

export default App;
