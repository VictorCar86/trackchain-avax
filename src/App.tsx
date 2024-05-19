/* Hooks */
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

/* Components page */
/* import Navbar from './components/Navbar' */
import Login from './pages/Login'
import Dashboard from './layouts/Dashboard'

/* Styles */
import './App.css'

function App() {
  return (
    <main className='h-screen flex'>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard children={<p>Dashboard</p>} />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App;