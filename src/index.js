import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// eslint-disable-next-line no-unused-vars
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import Counter from './components/counter';

ReactDOM.render(
  
  <Counter />,
  
  document.getElementById('root')
);
// Above can be written like this as well...
// ReactDom.render(<Counter />, document.getElementById('root'));
// registerServiceWorker();   *If using this must be imported up top instead of 'reportWebVitals'


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
