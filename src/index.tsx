import React from 'react';
import ReactDOM from 'react-dom/client';
import './GobalStyle.ts';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GobalStyle from './GobalStyle';
import Theme from './Theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Theme>
      <App />
      <GobalStyle/>
    </Theme>
    
  </React.StrictMode>
);

reportWebVitals();
