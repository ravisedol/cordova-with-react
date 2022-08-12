import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Boostrap 5
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';


const startApp = () => {

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

  reportWebVitals();

}


// For Cordova 
if(window.cordova){
  document.addEventListener('deviceready',startApp, false);
}else{
  startApp();
}
