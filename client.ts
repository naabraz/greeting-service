import { ServiceError, credentials } from '@grpc/grpc-js';
import { GreeterClient, HelloReply, HelloRequest } from './proto/greeting';

const client = new GreeterClient(
  'localhost:8080',
  credentials.createInsecure()
);

const greetingRequest: HelloRequest = {
  name: 'Natalia',
};

client.sayHello(
  greetingRequest,
  (err: ServiceError | null, response: HelloReply) => {
    console.log(JSON.stringify(response));
  }
);
