import {
  Server,
  ServerCredentials,
  ServerUnaryCall,
  sendUnaryData,
} from '@grpc/grpc-js';
import { GreeterService, HelloReply, HelloRequest } from './proto/greeting';

const sayHello = (
  call: ServerUnaryCall<HelloRequest, HelloReply>,
  callback: sendUnaryData<HelloReply>
) => {
  const message: HelloReply = { message: `Hi ${call.request.name}!` };

  callback(null, message);
};

const server = new Server();

server.addService(GreeterService, { sayHello: sayHello });
server.bindAsync('localhost:8080', ServerCredentials.createInsecure(), () => {
  console.log('Started!');
  server.start();
});
