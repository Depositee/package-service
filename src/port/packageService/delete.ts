import * as gprc from '@grpc/grpc-js';
import { PackageId } from '../../proto/package/PackageId';
import { Empty } from '../../proto/google/protobuf/Empty';
import { PackageService } from '../../services/package.service';
export function Delete(call:gprc.ServerUnaryCall<PackageId, Empty>, callback:gprc.sendUnaryData<Empty>){
    PackageService.deletePackage(call.request.id as string).then((data) => {
        const empty:Empty = {}
        callback(null, empty);
    })
}