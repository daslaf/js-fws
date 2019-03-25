import { observable, action } from 'mobx';

export const initialState = [
  { id: 12, name: 'First counter name I can think of', count: 0 },
  { id: 43, name: 'Kitten request', count: 0 },
  { id: 25, name: 'Ol\' king Cole was a merry ol\' soul', count: 0 },
];

export default class Store {
  @observable
  counters = [];

  constructor(counters) {
    this.counters = counters;
  }

  @action
  addCount = id => {
    const counter = this.counters.find(c => c.id === id);

    counter.count += 1;
  }
};
