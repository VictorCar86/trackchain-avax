/* Hooks */
import { useContext } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

/* Components page */
/* import Navbar from './components/Navbar' */
import Login from './pages/Login'
import Dashboard from './layouts/Dashboard'

/* Components rendering in Dashboard */
import ProductForm from './components/ProductForm';
import ProductInfo from './components/ProductInfo';
import { TrackContextProvider, TrackContext } from './context/context';

/* Styles */
import './App.css'

function App() {
  const context = useContext(TrackContext);

  return (
    <TrackContextProvider>
      <main className='h-screen flex'>
        <Router>
          <Routes>
            <Route path='/' element={<Login />} />
            {
              context.navUserBtn1 ? (
                <Route path='/dashboard' element={<Dashboard children={<ProductForm />} />} />
              ) : null
            }
          </Routes>
        </Router>
      </main>
    </TrackContextProvider>
  )
}

export default App;