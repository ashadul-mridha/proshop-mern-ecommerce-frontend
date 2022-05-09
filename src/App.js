import './App.css';
import './bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from './components/screens/HomeScreen';
import ProductScreen from './components/screens/ProductScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/product/:id" element={<ProductScreen />} />
        <Route path="/cart" element={<ProductScreen />} />
        <Route path="/login" element={<ProductScreen />}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
