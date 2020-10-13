import React from "react";
import "./App.css";
import { BrowserRouter,  Route} from "react-router-dom";

import Homepage from "./pages/Homepage";
import Bar from "./components/Bar/Bar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={Homepage} />
        <Route path="/bar" component={Bar} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
