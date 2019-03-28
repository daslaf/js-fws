import React, { useContext, useEffect } from 'react';

import CountersStore from '../models/counters';
import Counters from './Counters';

const App = () => {
  const store = useContext(CountersStore);
  
  useEffect(() => {
    store.fetchCounters();
  }, []);

  return (
    <Counters
      store={store}
    />
  );
};

export default App;
