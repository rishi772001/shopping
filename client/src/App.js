import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Login from "./pages/Login";
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/" component={Home}/>

      </Router>
    </div>
  );
}

export default App;
