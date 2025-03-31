import { HelloWorld } from './hello-world';
// import { log } from './winston-elasticsearch-logger';
import { log } from './elasticsearch-transport-logger';

export const sayHello = () => {
  log.info('hello world');
  return HelloWorld;
};

sayHello();
