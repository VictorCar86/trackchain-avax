import Login from './pages/Login'
import Dashboard from './layouts/Dashboard'
import ProductForm from './components/ProductForm';
import ProductInfo from './components/ProductInfo';
import './App.css'

function App() {
  return (
    <main className='h-screen'>
      {/* <Login /> */}
      {/* <Dashboard>
        <ProductForm />
      </Dashboard> */}
      <Dashboard>
        <ProductInfo />
      </Dashboard>
    </main>
  )
}

export default App;