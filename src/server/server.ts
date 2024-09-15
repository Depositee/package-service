import * as gprc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';

const port = 3000;
const uri = `localhost:${port}`;
const ProtoFile = "../../"
const server = new gprc.Server();

server.addService
