// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.5
//   protoc               v3.21.12
// source: proto/package.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import {
  type CallOptions,
  ChannelCredentials,
  Client,
  type ClientOptions,
  type ClientUnaryCall,
  type handleUnaryCall,
  makeGenericClientConstructor,
  Metadata,
  type ServiceError,
  type UntypedServiceImplementation,
} from "@grpc/grpc-js";
import { Empty } from "../google/protobuf/empty";

export const protobufPackage = "package";

export interface Package {
  id: string;
  name: string;
  description: number;
  weight: number;
  depositorId: string;
  depositeeId: string;
  isAvailable: boolean;
  isReceived: boolean;
}

export interface PackageId {
  id: string;
}

export interface PackageList {
  package: Package[];
}

function createBasePackage(): Package {
  return {
    id: "",
    name: "",
    description: 0,
    weight: 0,
    depositorId: "",
    depositeeId: "",
    isAvailable: false,
    isReceived: false,
  };
}

export const Package: MessageFns<Package> = {
  encode(message: Package, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== 0) {
      writer.uint32(24).int32(message.description);
    }
    if (message.weight !== 0) {
      writer.uint32(32).int32(message.weight);
    }
    if (message.depositorId !== "") {
      writer.uint32(42).string(message.depositorId);
    }
    if (message.depositeeId !== "") {
      writer.uint32(50).string(message.depositeeId);
    }
    if (message.isAvailable !== false) {
      writer.uint32(56).bool(message.isAvailable);
    }
    if (message.isReceived !== false) {
      writer.uint32(64).bool(message.isReceived);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Package {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePackage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.description = reader.int32();
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.weight = reader.int32();
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          message.depositorId = reader.string();
          continue;
        }
        case 6: {
          if (tag !== 50) {
            break;
          }

          message.depositeeId = reader.string();
          continue;
        }
        case 7: {
          if (tag !== 56) {
            break;
          }

          message.isAvailable = reader.bool();
          continue;
        }
        case 8: {
          if (tag !== 64) {
            break;
          }

          message.isReceived = reader.bool();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Package {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.Number(object.description) : 0,
      weight: isSet(object.weight) ? globalThis.Number(object.weight) : 0,
      depositorId: isSet(object.depositorId) ? globalThis.String(object.depositorId) : "",
      depositeeId: isSet(object.depositeeId) ? globalThis.String(object.depositeeId) : "",
      isAvailable: isSet(object.isAvailable) ? globalThis.Boolean(object.isAvailable) : false,
      isReceived: isSet(object.isReceived) ? globalThis.Boolean(object.isReceived) : false,
    };
  },

  toJSON(message: Package): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== 0) {
      obj.description = Math.round(message.description);
    }
    if (message.weight !== 0) {
      obj.weight = Math.round(message.weight);
    }
    if (message.depositorId !== "") {
      obj.depositorId = message.depositorId;
    }
    if (message.depositeeId !== "") {
      obj.depositeeId = message.depositeeId;
    }
    if (message.isAvailable !== false) {
      obj.isAvailable = message.isAvailable;
    }
    if (message.isReceived !== false) {
      obj.isReceived = message.isReceived;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Package>, I>>(base?: I): Package {
    return Package.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Package>, I>>(object: I): Package {
    const message = createBasePackage();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? 0;
    message.weight = object.weight ?? 0;
    message.depositorId = object.depositorId ?? "";
    message.depositeeId = object.depositeeId ?? "";
    message.isAvailable = object.isAvailable ?? false;
    message.isReceived = object.isReceived ?? false;
    return message;
  },
};

function createBasePackageId(): PackageId {
  return { id: "" };
}

export const PackageId: MessageFns<PackageId> = {
  encode(message: PackageId, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PackageId {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePackageId();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PackageId {
    return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
  },

  toJSON(message: PackageId): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PackageId>, I>>(base?: I): PackageId {
    return PackageId.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PackageId>, I>>(object: I): PackageId {
    const message = createBasePackageId();
    message.id = object.id ?? "";
    return message;
  },
};

function createBasePackageList(): PackageList {
  return { package: [] };
}

export const PackageList: MessageFns<PackageList> = {
  encode(message: PackageList, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.package) {
      Package.encode(v!, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PackageList {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePackageList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.package.push(Package.decode(reader, reader.uint32()));
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PackageList {
    return {
      package: globalThis.Array.isArray(object?.package) ? object.package.map((e: any) => Package.fromJSON(e)) : [],
    };
  },

  toJSON(message: PackageList): unknown {
    const obj: any = {};
    if (message.package?.length) {
      obj.package = message.package.map((e) => Package.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PackageList>, I>>(base?: I): PackageList {
    return PackageList.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PackageList>, I>>(object: I): PackageList {
    const message = createBasePackageList();
    message.package = object.package?.map((e) => Package.fromPartial(e)) || [];
    return message;
  },
};

export type PackageServiceService = typeof PackageServiceService;
export const PackageServiceService = {
  getAll: {
    path: "/package.PackageService/GetAll",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: Empty) => Buffer.from(Empty.encode(value).finish()),
    requestDeserialize: (value: Buffer) => Empty.decode(value),
    responseSerialize: (value: PackageList) => Buffer.from(PackageList.encode(value).finish()),
    responseDeserialize: (value: Buffer) => PackageList.decode(value),
  },
  get: {
    path: "/package.PackageService/Get",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: PackageId) => Buffer.from(PackageId.encode(value).finish()),
    requestDeserialize: (value: Buffer) => PackageId.decode(value),
    responseSerialize: (value: Package) => Buffer.from(Package.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Package.decode(value),
  },
  create: {
    path: "/package.PackageService/Create",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: Package) => Buffer.from(Package.encode(value).finish()),
    requestDeserialize: (value: Buffer) => Package.decode(value),
    responseSerialize: (value: Package) => Buffer.from(Package.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Package.decode(value),
  },
  update: {
    path: "/package.PackageService/Update",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: Package) => Buffer.from(Package.encode(value).finish()),
    requestDeserialize: (value: Buffer) => Package.decode(value),
    responseSerialize: (value: Package) => Buffer.from(Package.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Package.decode(value),
  },
  delete: {
    path: "/package.PackageService/Delete",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: PackageId) => Buffer.from(PackageId.encode(value).finish()),
    requestDeserialize: (value: Buffer) => PackageId.decode(value),
    responseSerialize: (value: Empty) => Buffer.from(Empty.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Empty.decode(value),
  },
} as const;

export interface PackageServiceServer extends UntypedServiceImplementation {
  getAll: handleUnaryCall<Empty, PackageList>;
  get: handleUnaryCall<PackageId, Package>;
  create: handleUnaryCall<Package, Package>;
  update: handleUnaryCall<Package, Package>;
  delete: handleUnaryCall<PackageId, Empty>;
}

export interface PackageServiceClient extends Client {
  getAll(request: Empty, callback: (error: ServiceError | null, response: PackageList) => void): ClientUnaryCall;
  getAll(
    request: Empty,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: PackageList) => void,
  ): ClientUnaryCall;
  getAll(
    request: Empty,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: PackageList) => void,
  ): ClientUnaryCall;
  get(request: PackageId, callback: (error: ServiceError | null, response: Package) => void): ClientUnaryCall;
  get(
    request: PackageId,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Package) => void,
  ): ClientUnaryCall;
  get(
    request: PackageId,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Package) => void,
  ): ClientUnaryCall;
  create(request: Package, callback: (error: ServiceError | null, response: Package) => void): ClientUnaryCall;
  create(
    request: Package,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Package) => void,
  ): ClientUnaryCall;
  create(
    request: Package,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Package) => void,
  ): ClientUnaryCall;
  update(request: Package, callback: (error: ServiceError | null, response: Package) => void): ClientUnaryCall;
  update(
    request: Package,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Package) => void,
  ): ClientUnaryCall;
  update(
    request: Package,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Package) => void,
  ): ClientUnaryCall;
  delete(request: PackageId, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
  delete(
    request: PackageId,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Empty) => void,
  ): ClientUnaryCall;
  delete(
    request: PackageId,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Empty) => void,
  ): ClientUnaryCall;
}

export const PackageServiceClient = makeGenericClientConstructor(
  PackageServiceService,
  "package.PackageService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): PackageServiceClient;
  service: typeof PackageServiceService;
  serviceName: string;
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
  fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}