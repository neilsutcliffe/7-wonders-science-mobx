import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import boardStore from './stores/boardStore';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'normalize.css'; 


const stores = {
	boardStore
  };
  

ReactDOM.render(  <Provider {...stores}>
      <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
