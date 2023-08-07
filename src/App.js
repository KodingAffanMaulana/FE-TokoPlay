import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'

const url = 'https://affanmaulanamidproject-production.up.railway.app/products?videoID=321'

function App() {
  const [products, setProducts] = useState([]);

  const getData = async () => {
    try {
      const data = await fetch(url);
      console.log('data', data);      
      const response = data.json();
      setProducts(response);
    } catch (error) {
    }
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className="App">
      Final Project Affan
    </div>
  );
}

export default App;
