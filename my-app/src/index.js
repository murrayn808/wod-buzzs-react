import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const Buzzs = () => (
  <div>
    <h1>Buzz's Original Steak House Lanikai</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Buzzs />);