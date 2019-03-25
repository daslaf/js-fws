import React from 'react';

import Store, { initialState } from '../models/counters';

import CounterMobx from './CounterMobx';

const store = new Store(initialState);

const App = () => (
  <CounterMobx
    store={store}
  />
);

export default App;
