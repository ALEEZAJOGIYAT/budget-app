import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {BudgetCalculator} from './components/budget'
import { Login } from "./components/login";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/budget" element={<BudgetCalculator/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
