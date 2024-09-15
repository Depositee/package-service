import * as gprc from '@grpc/grpc-js';
import { Empty } from '../../proto/google/protobuf/Empty';
import { PackageList } from '../../proto/package/PackageList';
import { PackageService } from '../../services/package.service';
export function GetAll(call:gprc.ServerUnaryCall<Empty, PackageList>, callback:gprc.sendUnaryData<PackageList>){
    PackageService.findAllPackage().then((data) => {
        const response:PackageList =  {
            package: data
        }
        callback(null, response);
    }
    )
}