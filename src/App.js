
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/home';
import ProductDetail from './components/productdetails';
import data from './assets/data';

function App () {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/:categoryId/products/:productId"
          element={<ProductDetail products={data.categories} />}
        />
      </Routes>
    </div>
  );
}

export default App;
