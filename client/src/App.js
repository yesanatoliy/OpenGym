import './App.css'
import Home from './components/Home'
import NavBar from './components/NavBar'
import ProfilePage from './components/ProfilePage'
import Search from './components/Search'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
