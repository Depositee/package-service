import path from "path"
import * as gprc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';

const port = 3000;
const uri = `localhost:${port}`;
const PROTO_FILE = "../../proto/package.proto";
const packageDef = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE));
const grpcObject = gprc.loadPackageDefinition(packageDef);
const packageService = grpcObject.packageService;
const server = new gprc.Server();

server.addService(packageService.PackageService.service, {
    GetPackage: (call:any, callback:any) => {
        const package = {
        id: 1,
        name: "Package 1",
        description: "This is package 1"
        };
        callback(null, package);
    }
    });
