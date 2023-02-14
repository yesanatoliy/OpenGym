import './App.css'
import Home from './components/Home'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
