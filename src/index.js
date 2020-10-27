import React from 'react';
import ReactDOM from 'react-dom'; // package that provides DOM-specific methods 
import './index.css';
import { pattern1 } from './data.js'
import Matrix from './Matrix.js'

// Render React element into the DOM in supplied container
ReactDOM.render(<Matrix values={pattern1} />, document.getElementById('root'));

