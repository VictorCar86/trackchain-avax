/* Hooks */
import { Route, Routes } from 'react-router-dom'

/* Components */
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Dashboard from './layouts/Dashboard'
import ProductForm from './components/ProductForm';
import ProductInfo from './components/ProductInfo';
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <main className='h-screen'>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/form' element={<Dashboard><ProductForm/></Dashboard>}/>
          <Route path='/info' element={<Dashboard><ProductInfo/></Dashboard>}/>
        </Routes>
      </main>
    </>
  )
}

export default App;