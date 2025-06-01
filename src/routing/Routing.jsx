import {Routes, Route} from 'react-router-dom';
import Home from '../pages/Home'
import ProductList from '../components/ProductList';
import ProductDetails from '../pages/ProductDetails';


const Routing = () => {
  return (
    <>
   <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/products" element={<ProductList />} />
  <Route path="/category/:category" element={<ProductList />} />
  <Route path="/products/:id" element={<ProductDetails />} />
</Routes>

    </>
  )
}

export default Routing
