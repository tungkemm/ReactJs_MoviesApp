import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import RouterPage from "./routes/RouterPage";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <Header />
      <RouterPage />
      <Footer />
    </div>
  );
}

export default App;
