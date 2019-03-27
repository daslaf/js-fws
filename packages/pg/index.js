const Pool = require('pg').Pool;
const { postgres } = require('../../secrets');

const pool = new Pool(postgres);

module.exports = pool;
