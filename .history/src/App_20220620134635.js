import { Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/" element={<Home />} />
          <Route />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;