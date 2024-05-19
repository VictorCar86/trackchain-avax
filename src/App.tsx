/* Hooks */
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

/* Components page */
/* import Navbar from './components/Navbar' */
import Login from './pages/Login'
import Dashboard from './layouts/Dashboard'

/* Components rendering in root */
import { Web3ModalProvider } from './utils/hooks/Web3ModalProvider';
import { TrackContextProvider } from './context/context';

/* Styles */
import './App.css'

function App() {
  return (
    <Web3ModalProvider>
      <TrackContextProvider>
        <main className='h-screen flex'>
          <Router>
            <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/dashboard' element={<Dashboard />} />
            </Routes>
          </Router>
        </main>
      </TrackContextProvider>
    </Web3ModalProvider>
  )
}

export default App;