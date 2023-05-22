//import '../sass/index.sass';
import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App/App.tsx';

ReactDOM.render(
  <Router>
  <App />
  </Router>, document.getElementById('app')
  );
