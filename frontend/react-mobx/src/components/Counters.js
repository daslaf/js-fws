import React from 'react';
import { observer } from 'mobx-react';

const Counters = observer(({ store }) => (
  <section>
    <h1>Counters</h1>

    <ul>
      {store.counters.map(counter => (
        <CounterItem
          key={counter.id}
          counter={counter}
          addCount={store.addCount}
        />
      ))}
    </ul>
  </section>
));

const CounterItem = observer(({ counter, addCount }) => (
  <li onClick={() => addCount(counter.id)}>
    <strong>{counter.name}</strong>: {counter.value}
  </li>
));

export default Counters;
