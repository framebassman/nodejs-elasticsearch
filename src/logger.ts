import { createLogger, format, transports } from 'winston';
import {
  ElasticsearchTransport,
  ElasticsearchTransformer
} from 'winston-elasticsearch';

const esTransportOpts = {
  level: 'debug',
  indexPrefix: 'filebeat-7.10.2',
  indexSuffixPattern: 'YYYY.MM.DD',
  clientOpts: {
    node: 'https://kolenka-inc-4135333449.eu-central-1.bonsaisearch.net',
    auth: {
      username: 'NX4jPVtxmC',
      password: 'QNw5bzyHoXC9YFkr'
    }
  },
  // clientOpts: {
  // serverUrl: "https://NX4jPVtxmC:QNw5bzyHoXC9YFkr@kolenka-inc-4135333449.eu-central-1.bonsaisearch.net"
  // },
  transformer: (logData) => {
    const transformed = ElasticsearchTransformer(logData);
    //  transformed.fields.customField = 'customValue'
    return transformed;
  }
};
// const esTransport = new ElasticsearchTransport(esTransportOpts);

export const log = createLogger({
  level: 'debug',
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss.sss'
    }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'inventory-api' },
  transports: [
    //
    // - Write all logs with importance level of `error` or higher to `error.log`
    //   (i.e., error, fatal, but not other levels)
    //
    new transports.File({ filename: 'logs/error.jsonl', level: 'error' }),
    //
    // - Write all logs with importance level of `info` or higher to `combined.log`
    //   (i.e., fatal, error, warn, and info, but not trace)
    //
    new transports.File({ filename: 'logs/root.jsonl' }),

    new transports.Console({ format: format.colorize({ all: true }) }),

    new ElasticsearchTransport(esTransportOpts)
  ]
});
