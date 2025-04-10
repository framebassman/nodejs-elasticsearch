import winston from 'winston';

import { CustomHttpElasticTransport } from './custom-http-elastic-transport';
// import { CustomHttpElasticTransport } from './custom-http-elastic-transport';
// import { Agent } from 'http';

let dateString = new Date(new Date()).toISOString().split('T')[0];
dateString = dateString.replaceAll('-', '.');

export const log = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json(),
    winston.format.prettyPrint()
  ),
  transports: [
    new winston.transports.Console(),
    new CustomHttpElasticTransport({
      ssl: true,
      host: 'kolenka-inc-4135333449.eu-central-1.bonsaisearch.net',
      port: 443,
      auth: {
        username: 'NX4jPVtxmC',
        password: 'QNw5bzyHoXC9YFkr',
      },
      path: 'filebeat-7.10.2-2025.04.10/_doc/',
      headers: {
        'Content-type': 'application/json'
      },
    })
  ]
});
