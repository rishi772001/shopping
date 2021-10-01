import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Login from "./pages/Login";
import Home from './pages/Home';
import Purchases from './pages/Purchases';

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/purchases" component={Purchases}/>
      </Router>
    </div>
  );
}

export default App;
