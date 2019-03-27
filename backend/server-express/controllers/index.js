const { getCounters } = require('../services');

const handleGetCounters = (req, res) => {
  getCounters((err, results) => {
    if (err) {
      throw err;
    }

    res
      .status(200)
      .json({ data: results.rows });
  });
}

module.exports = {
  handleGetCounters
};
