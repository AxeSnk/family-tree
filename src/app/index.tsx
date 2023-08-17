import React, { createContext } from 'react';
import { createRoot } from 'react-dom/client';

import Store from 'store/store';
import App from './App';

interface State {
  store: Store;
}

export const store = new Store();

export const Context = createContext<State>({ store });

const container = document.getElementById('root');
const root = createRoot(container as Element);

root.render(
  <Context.Provider value={{ store }}>
    <App />
  </Context.Provider>,
);
