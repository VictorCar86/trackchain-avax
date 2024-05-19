/* Hooks */
import { Route, Routes } from 'react-router-dom'

/* Components */
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Dashboard from './layouts/Dashboard'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <main className='h-screen'>
        <Routes>
          <Route path='/Login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </main>
    </>
  )
}

export default App;