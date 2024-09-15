import * as gprc from '@grpc/grpc-js';
import { Package } from '../../proto/package/Package';
import { PackageService } from '../../services/package.service';
export function Create(call:gprc.ServerUnaryCall<Package, Package>, callback:gprc.sendUnaryData<Package>){
    PackageService.createPackage(call.request).then((data) => {
        callback(null, data);
    })
}