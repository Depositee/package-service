// Original file: proto/package.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Empty as _google_protobuf_Empty, Empty__Output as _google_protobuf_Empty__Output } from '../google/protobuf/Empty';
import type { Package as _package_Package, Package__Output as _package_Package__Output } from '../package/Package';
import type { PackageId as _package_PackageId, PackageId__Output as _package_PackageId__Output } from '../package/PackageId';
import type { PackageList as _package_PackageList, PackageList__Output as _package_PackageList__Output } from '../package/PackageList';

export interface PackageServiceClient extends grpc.Client {
  Create(argument: _package_Package, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_package_Package__Output>): grpc.ClientUnaryCall;
  Create(argument: _package_Package, metadata: grpc.Metadata, callback: grpc.requestCallback<_package_Package__Output>): grpc.ClientUnaryCall;
  Create(argument: _package_Package, options: grpc.CallOptions, callback: grpc.requestCallback<_package_Package__Output>): grpc.ClientUnaryCall;
  Create(argument: _package_Package, callback: grpc.requestCallback<_package_Package__Output>): grpc.ClientUnaryCall;
  create(argument: _package_Package, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_package_Package__Output>): grpc.ClientUnaryCall;
  create(argument: _package_Package, metadata: grpc.Metadata, callback: grpc.requestCallback<_package_Package__Output>): grpc.ClientUnaryCall;
  create(argument: _package_Package, options: grpc.CallOptions, callback: grpc.requestCallback<_package_Package__Output>): grpc.ClientUnaryCall;
  create(argument: _package_Package, callback: grpc.requestCallback<_package_Package__Output>): grpc.ClientUnaryCall;
  
  Delete(argument: _package_PackageId, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  Delete(argument: _package_PackageId, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  Delete(argument: _package_PackageId, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  Delete(argument: _package_PackageId, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  delete(argument: _package_PackageId, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  delete(argument: _package_PackageId, metadata: grpc.Metadata, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  delete(argument: _package_PackageId, options: grpc.CallOptions, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  delete(argument: _package_PackageId, callback: grpc.requestCallback<_google_protobuf_Empty__Output>): grpc.ClientUnaryCall;
  
  Get(argument: _package_PackageId, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_package_Package__Output>): grpc.ClientUnaryCall;
  Get(argument: _package_PackageId, metadata: grpc.Metadata, callback: grpc.requestCallback<_package_Package__Output>): grpc.ClientUnaryCall;
  Get(argument: _package_PackageId, options: grpc.CallOptions, callback: grpc.requestCallback<_package_Package__Output>): grpc.ClientUnaryCall;
  Get(argument: _package_PackageId, callback: grpc.requestCallback<_package_Package__Output>): grpc.ClientUnaryCall;
  get(argument: _package_PackageId, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_package_Package__Output>): grpc.ClientUnaryCall;
  get(argument: _package_PackageId, metadata: grpc.Metadata, callback: grpc.requestCallback<_package_Package__Output>): grpc.ClientUnaryCall;
  get(argument: _package_PackageId, options: grpc.CallOptions, callback: grpc.requestCallback<_package_Package__Output>): grpc.ClientUnaryCall;
  get(argument: _package_PackageId, callback: grpc.requestCallback<_package_Package__Output>): grpc.ClientUnaryCall;
  
  GetAll(argument: _google_protobuf_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_package_PackageList__Output>): grpc.ClientUnaryCall;
  GetAll(argument: _google_protobuf_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_package_PackageList__Output>): grpc.ClientUnaryCall;
  GetAll(argument: _google_protobuf_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_package_PackageList__Output>): grpc.ClientUnaryCall;
  GetAll(argument: _google_protobuf_Empty, callback: grpc.requestCallback<_package_PackageList__Output>): grpc.ClientUnaryCall;
  getAll(argument: _google_protobuf_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_package_PackageList__Output>): grpc.ClientUnaryCall;
  getAll(argument: _google_protobuf_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_package_PackageList__Output>): grpc.ClientUnaryCall;
  getAll(argument: _google_protobuf_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_package_PackageList__Output>): grpc.ClientUnaryCall;
  getAll(argument: _google_protobuf_Empty, callback: grpc.requestCallback<_package_PackageList__Output>): grpc.ClientUnaryCall;
  
  Update(argument: _package_Package, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_package_Package__Output>): grpc.ClientUnaryCall;
  Update(argument: _package_Package, metadata: grpc.Metadata, callback: grpc.requestCallback<_package_Package__Output>): grpc.ClientUnaryCall;
  Update(argument: _package_Package, options: grpc.CallOptions, callback: grpc.requestCallback<_package_Package__Output>): grpc.ClientUnaryCall;
  Update(argument: _package_Package, callback: grpc.requestCallback<_package_Package__Output>): grpc.ClientUnaryCall;
  update(argument: _package_Package, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_package_Package__Output>): grpc.ClientUnaryCall;
  update(argument: _package_Package, metadata: grpc.Metadata, callback: grpc.requestCallback<_package_Package__Output>): grpc.ClientUnaryCall;
  update(argument: _package_Package, options: grpc.CallOptions, callback: grpc.requestCallback<_package_Package__Output>): grpc.ClientUnaryCall;
  update(argument: _package_Package, callback: grpc.requestCallback<_package_Package__Output>): grpc.ClientUnaryCall;
  
}

export interface PackageServiceHandlers extends grpc.UntypedServiceImplementation {
  Create: grpc.handleUnaryCall<_package_Package__Output, _package_Package>;
  
  Delete: grpc.handleUnaryCall<_package_PackageId__Output, _google_protobuf_Empty>;
  
  Get: grpc.handleUnaryCall<_package_PackageId__Output, _package_Package>;
  
  GetAll: grpc.handleUnaryCall<_google_protobuf_Empty__Output, _package_PackageList>;
  
  Update: grpc.handleUnaryCall<_package_Package__Output, _package_Package>;
  
}

export interface PackageServiceDefinition extends grpc.ServiceDefinition {
  Create: MethodDefinition<_package_Package, _package_Package, _package_Package__Output, _package_Package__Output>
  Delete: MethodDefinition<_package_PackageId, _google_protobuf_Empty, _package_PackageId__Output, _google_protobuf_Empty__Output>
  Get: MethodDefinition<_package_PackageId, _package_Package, _package_PackageId__Output, _package_Package__Output>
  GetAll: MethodDefinition<_google_protobuf_Empty, _package_PackageList, _google_protobuf_Empty__Output, _package_PackageList__Output>
  Update: MethodDefinition<_package_Package, _package_Package, _package_Package__Output, _package_Package__Output>
}
