import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import ProductDetails from './components/ProductDetails';
import ProductListing from './components/ProductListing';

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' exact component={<ProductListing/>}/>
        <Route path='/product/:productId' exact component={<ProductDetails}/>   
        <Route>$)</Route>

      </Routes>
    
    </div>
    </Router>
  );
}

export default App;
