const _endpoints = require('@js-fws/endpoints');

const host = '//localhost:8888';

export const endpoints = Object.keys(_endpoints).reduce((acc, key) => ({
  ...acc,
  [key]: `${host}/api${_endpoints[key]}`
}), {}) ;

export const http = window.fetch;