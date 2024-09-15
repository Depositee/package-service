import * as gprc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';

const port = 3000;
const uri = `localhost:${port}`;
const PROTO_FILE = "../../proto/package.proto";
const packageDef = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE));
const grpcObject = gprc.loadPackageDefinition(packageDef);
const packageService = grpcObject.packageService;
const server = new gprc.Server();
// Connect to Database
ConnectDB();
listServices.forEach(service => {
    server.addService(service.service, service.implementation);
});

server.bindAsync(url, gprc.ServerCredentials.createInsecure(), (err, port) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(`Server running at http://${url}`);
    server.start();
}
);