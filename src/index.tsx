import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/colors.css';
import './assets/styles/reset.css';
import './assets/styles/common.css';

const root = document.getElementById('root');

if (!root) {
  throw new Error('Failed to find the root element');
}

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
