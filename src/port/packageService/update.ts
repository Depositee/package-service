import * as gprc from '@grpc/grpc-js';
import { Package } from '../../proto/package/Package';
import { PackageService } from '../../services/package.service';
export function Update(call:gprc.ServerUnaryCall<Package, Package>, callback:gprc.sendUnaryData<Package>){
    // TODO : check call.request.id 
    PackageService.updatePackage(call.request.id as string,call.request).then((data) => {
        callback(null, data);
    })
}