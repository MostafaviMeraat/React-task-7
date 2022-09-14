import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import ShardeLayout from './pages/SharedLayout';
import Home from './pages/Home';
import Counter from './pages/Counter';
import Products from './pages/Products';
import ProductInfo from './pages/ProductInfo';
import Error from './pages/Error';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import ProtectedRoute from './pages/ProtectedRoute';


function App() {

  const [user, setUser] = useState(null)
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ShardeLayout />} >
          <Route index element={<Home />} />
          <Route path='counter' element={<Counter />} />
          <Route path='products' element={<Products />} />
          <Route path='products/:productID' element={<ProductInfo />} />
          <Route path='dashboard' element={<ProtectedRoute user={user}>
            <Dashboard user={user} />
          </ProtectedRoute>} />
          <Route path='login' element={<Login setUser={setUser} />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
