import React from 'react';
import './App.css';
import Homepage from './pages/Homepage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import Bar from './components/Bar/Bar';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Homepage}/>
        <Route path="/bar" component={Bar}/>
      </Switch>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
