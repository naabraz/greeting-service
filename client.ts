import { ServiceError, credentials } from '@grpc/grpc-js';

import { GreeterClient, GretterReply, GreeterRequest } from './proto/greeting';

const client = new GreeterClient(
  'localhost:8080',
  credentials.createInsecure()
);

const greetingRequest: GreeterRequest = {
  name: 'Natalia',
};

client.sayHello(
  greetingRequest,
  (err: ServiceError | null, response: GretterReply) => {
    console.log(JSON.stringify(response));
  }
);
