import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import ProductDetails from './components/ProductDetails';
import { ProductListing } from './components/ProductListing';

function App() {
  return (
    
    <div className="App">
      <Router>
      <Header/>
      <Routes>
        <Route path='/'  component={<ProductListing/>}/>
        <Route path='/product/:productId'  component={<ProductDetails/>}/>   
        <Route>404 page not found</Route>

      </Routes>
    </Router>
    </div>
    
  );
}

export default App;
