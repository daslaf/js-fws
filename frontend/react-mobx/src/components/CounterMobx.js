import React from 'react';
import { observer } from 'mobx-react';


const CounterMobx = observer(props => (
  <section>
    <h1>Counters with Mobx</h1>

    <ul>
      {props.store.counters.map(counter => (
        <CounterItem
          key={counter.id}
          counter={counter}
          addCount={props.store.addCount}
        />
      ))}
    </ul>
  </section>
));

const CounterItem = observer(({ counter, addCount }) => (
  <li onClick={() => addCount(counter.id)}>
    <strong>{counter.name}</strong>: {counter.count}
  </li>
));

export default CounterMobx;
