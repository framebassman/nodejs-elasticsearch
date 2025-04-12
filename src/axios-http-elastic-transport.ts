// import { Http, HttpTransportOptions } from 'winston/lib/winston/transports';
// import { OutgoingHttpHeader } from 'node:http';
// import axios, { AxiosInstance } from 'axios';

// export class AxiosHttpElasticTransport extends Http {
//   options: HttpTransportOptions;
//   // headers: NodeJS.Dict<OutgoingHttpHeader>;
//   client: AxiosInstance;

//   constructor(options = {}) {
//     super(options);
//     this.options = options;
//     this.client = axios.create({
//       adapter: 'fetch'
//     });
//   }

//   _doRequest(options, callback, auth, path) {
//     options['@timestamp'] = options.timestamp;
//     delete options.timestamp;
//     // this.client.post(path, ...this.options).then((res) => callback(null, res));
//   }
// }
