import { HelloWorld } from './hello-world';
// import { log } from './winston-elasticsearch-logger';
import { log } from './elasticsearch-transport-logger';

export const sayHello = () => {
  let dateString = new Date(new Date()).toISOString().split('T')[0];
  dateString = dateString.replaceAll('-', '.');
  log.info('hello world');
  log.info(`Time now: ${dateString}`);
  return HelloWorld;
};

sayHello();
