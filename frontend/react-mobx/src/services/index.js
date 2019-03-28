import { http, endpoints } from './http';

export const getCounters = () => http(endpoints.COUNTER).then(res => res.json());