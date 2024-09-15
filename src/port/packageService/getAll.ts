import * as gprc from '@grpc/grpc-js';
import { Empty } from '../../proto/google/protobuf/Empty';
import { PackageList } from '../../proto/package/PackageList';
export function GetAll(call:gprc.ServerUnaryCall<Empty, PackageList>, callback:gprc.sendUnaryData<PackageList>){
    callback(null, {package:[]});
}