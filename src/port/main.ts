import path from "path"
import * as gprc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from "../proto/package";
import { packageService as PackageServiceList } from "./packageService/main";
import { PackageServiceDefinition } from "../proto/package/PackageService";
import { UntypedServiceImplementation } from "@grpc/grpc-js";

const PROTO_FILE = "../../proto/package.proto";
const packageDef = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE));
const grpcObject = gprc.loadPackageDefinition(packageDef) as unknown as ProtoGrpcType;
const packageService = grpcObject.package;

interface serviceProps {
    service: PackageServiceDefinition;
    implementation: UntypedServiceImplementation;
}

export const listServices:serviceProps[] =[
    {
        service: packageService.PackageService.service,
        implementation: PackageServiceList
    }

]