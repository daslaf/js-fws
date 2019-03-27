const pool = require('@js-fws/pg');

const getCounters = (req, res) => {
  pool.query('SELECT * FROM counters', (err, results) => {
    if (err) {
      throw err;
    }

    res
      .status(200)
      .json({ data: results.rows });
  });
}

module.exports = {
  getCounters
};
