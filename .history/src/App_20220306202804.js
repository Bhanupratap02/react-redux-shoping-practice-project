import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      </Router>
    
    </div>
  );
}

export default App;
