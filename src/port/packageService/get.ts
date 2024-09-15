import * as gprc from '@grpc/grpc-js';
import { PackageId } from '../../proto/package/PackageId';
import { Package } from '../../proto/package/Package';
import { PackageService } from '../../services/package.service';
export function Get(call:gprc.ServerUnaryCall<PackageId, Package>, callback:gprc.sendUnaryData<Package>){
    PackageService.findPackageById(call.request.id as string).then((data) => {
        // const packageData:Package = {
        //     id: data.id,
        //     name: data.name,
        //     description: data.description,
        //     price: data.price,
        //     weight: data.weight,
        //     quantity: data.quantity
        // }
        callback(null, data);
    })
}