const { Pool } = require('pg');
const { postgres } = require('../../secrets');

const pool = new Pool(postgres);

module.exports = pool;
