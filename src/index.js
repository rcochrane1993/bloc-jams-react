import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
=======
import { BrowserRouter }from 'react-router-dom';
>>>>>>> checkpoint-12-bloc-jams-routing
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

<<<<<<< HEAD
ReactDOM.render(<App />, document.getElementById('root'));
=======
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  , document.getElementById('root'));
>>>>>>> checkpoint-12-bloc-jams-routing
registerServiceWorker();
