import { HelloWorld } from './hello-world';
import { log } from './logger';

export const sayHello = () => {
  log.info('hello world');
  return HelloWorld;
};

sayHello();
