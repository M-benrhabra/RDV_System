import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes/Routes.routes';
import './App.css';

function App() {
  return (
    <div className="">
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
