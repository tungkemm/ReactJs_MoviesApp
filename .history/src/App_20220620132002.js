import { Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from './components/Home/Home'
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/" element={<Home />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
