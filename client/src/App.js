import './App.css'
import Home from './pages/Home'
import ProfilePage from './pages/ProfilePage'
import Search from './components/Search'
import EventPage from './pages/EventPage'
import LoginPage from './pages/LoginPage'
import { Route, Routes } from 'react-router-dom'
import ProfileUpdateForm from './components/ProfileUpdateForm'
import { useState, useEffect } from 'react'
import { CheckSession } from './services/Auth'

function App() {
  const [user, setUser] = useState(null)
  const checkToken = async () => {
    const currentUser = await CheckSession()
    setUser(currentUser)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/login" element={<LoginPage setUser={setUser} />} />
        <Route path="/profile/:user" element={<ProfilePage />} />
        <Route path="/profile/update/:userId" element={<ProfileUpdateForm />} />
        <Route path="/search" element={<Search />} />
        <Route path="/events/:eventId" element={<EventPage />} />
      </Routes>
    </div>
  );
}

export default App;
