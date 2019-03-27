const { queryCounters } = require('../db');

const getCounters = queryCounters;

module.exports = {
  getCounters
};
