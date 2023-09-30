// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// // import * as serviceWorker from "./serviceWorker";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// // Register the service worker
// // serviceWorker.register(); // Use register() instead of unregister()
import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

import App from './App'; // Your main component
import { Route, BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
