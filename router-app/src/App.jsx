import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'


const Home = () => <h1>Welcome to the Bakery Store!</h1>;
const Products = () => <h2>Our Products</h2>;
const About = () => <h2>About Us</h2>;
const Contact = () => <h2>Contact Us</h2>;
const Cart = () => <h2>Your Cart</h2>;
const PageNotFound = () => <h2>404 - Page Not Found</h2>;


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  )
}

export default App
