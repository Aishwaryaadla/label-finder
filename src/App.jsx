import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import CategoryPage from './pages/CategoryPage';
import CategoriesPage from './pages/CategoriesPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex-grow p-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/categories/:categoryName" element={<CategoryPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App
