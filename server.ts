import {
  Server,
  ServerCredentials,
  ServerUnaryCall,
  sendUnaryData,
} from '@grpc/grpc-js';

import { GreeterService, GreeterRequest, GretterReply } from './proto/greeting';

const sayHello = (
  call: ServerUnaryCall<GreeterRequest, GretterReply>,
  callback: sendUnaryData<GretterReply>
) => {
  const name = call.request.name;

  console.log(`Saying hello to ${name}`);

  const message: GretterReply = { message: `Hi ${call.request.name}!` };

  callback(null, message);
};

const server = new Server();

server.addService(GreeterService, { sayHello: sayHello });
server.bindAsync('localhost:8080', ServerCredentials.createInsecure(), () => {
  console.log('Started!');
  server.start();
});
