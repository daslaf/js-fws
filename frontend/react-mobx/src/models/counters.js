import { createContext } from 'react';
import { observable, action, flow } from 'mobx';

import { getCounters } from '../services';

const RequestStatus = {
  Pending: 'PENDING',
  Done: 'DONE',
  Error: 'ERROR'
};

class CountersStore {
  @observable
  counters = [];

  @observable
  state = RequestStatus.Pending;

  @action
  addCount = id => {
    const counter = this.counters.find(c => c.id === id);

    counter.value += 1;
  };

  fetchCounters = flow(function * () {
    this.state = RequestStatus.Pending;

    try {
      const { data } = yield getCounters();

      this.counters = data;
      this.state = RequestStatus.Done;
    } catch(e) {
      this.state = RequestStatus.Error;
    }
  });
};

export default createContext(new CountersStore());
