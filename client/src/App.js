import './App.css'
import Home from './components/Home'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <Home />
    </div>
  );
}

export default App;
