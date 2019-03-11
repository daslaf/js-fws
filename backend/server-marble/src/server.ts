import { createServer, httpListener, HttpEffect, EffectFactory } from '@marblejs/core';
import { mapTo } from 'rxjs/operators';

const helloEffect$: HttpEffect = req$ => req$.pipe(
  mapTo({
    body: 'Hello World',
  })
);

const hello$ = EffectFactory
  .matchPath('/')
  .matchType('GET')
  .use(helloEffect$);

const config = {
  middlewares: [],
  effects: [
    hello$
  ]
};

export const server = createServer({
  port: 1337,
  hostname: '127.0.0.1',
  httpListener: httpListener(config),
});

server.run();
