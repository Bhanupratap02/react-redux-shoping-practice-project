import { BrowserRouter as Router,Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import ProductDetails from './components/ProductDetails';
import { ProductListing } from './components/ProductListing';

function App() {
  return (
    
    <div className="App">
      <Router>
      <Header/>
      <Switch>
        <Route exact  path='/' exact component={<ProductListing/>}/>
        <Route path='/product/:productId' exact  component={<ProductDetails/>}/>   
        <Route>404 page not found</Route>

      </Switch>
    </Router>
    </div>
    
  );
}

export default App;
