
import { StrictMode } from 'react';

import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';

import './index.scss';

import { App } from './components/App';
import { store } from './Store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>,
);