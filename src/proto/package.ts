import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { PackageServiceClient as _package_PackageServiceClient, PackageServiceDefinition as _package_PackageServiceDefinition } from './package/PackageService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  google: {
    protobuf: {
      Empty: MessageTypeDefinition
    }
  }
  package: {
    Package: MessageTypeDefinition
    PackageId: MessageTypeDefinition
    PackageList: MessageTypeDefinition
    PackageService: SubtypeConstructor<typeof grpc.Client, _package_PackageServiceClient> & { service: _package_PackageServiceDefinition }
  }
}

