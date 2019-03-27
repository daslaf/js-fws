const pool = require('@js-fws/pg');

const queryCounters = callback => {
  pool.query('SELECT * FROM counters', callback);
};

module.exports = {
  queryCounters
};
