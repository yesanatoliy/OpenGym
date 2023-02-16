import './App.css'
import Home from './pages/Home'
import ProfilePage from './pages/ProfilePage'
import Search from './components/Search'
import EventPage from './pages/EventPage'
import LoginPage from './pages/LoginPage'
import { Route, Routes } from 'react-router-dom'
import ProfileUpdateForm from './components/ProfileUpdateForm'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile/:user" element={<ProfilePage />} />
        <Route path="/profile/update/:userId" element={<ProfileUpdateForm />} />
        <Route path="/search" element={<Search />} />
        <Route path="/events/:eventId" element={<EventPage />} />
      </Routes>
    </div>
  );
}

export default App;
