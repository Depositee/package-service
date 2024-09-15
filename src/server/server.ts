import * as gprc from '@grpc/grpc-js';
import { listServices } from "../port/main";
import * as protoLoader from '@grpc/proto-loader';
import { ConnectDB } from "../configs/database";

const port = 3000;
const url = `localhost:${port}`;
const server = new gprc.Server();
listServices.forEach(service => {
    server.addService(service.service, service.implementation);
});
// Connect to Database
ConnectDB();

server.bindAsync(url, gprc.ServerCredentials.createInsecure(), (err, port) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(`Server running at http://${url}`);
    server.start();
}
);