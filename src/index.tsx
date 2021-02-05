import Main from './root/Main';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  (<BrowserRouter>
    <Main />
  </BrowserRouter>),
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
