/* eslint-disable */
import {
  CallOptions,
  ChannelCredentials,
  Client,
  ClientOptions,
  ClientUnaryCall,
  handleUnaryCall,
  makeGenericClientConstructor,
  Metadata,
  ServiceError,
  UntypedServiceImplementation,
} from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "greeter";

export interface GreeterRequest {
  name: string;
}

export interface GretterReply {
  message: string;
}

function createBaseGreeterRequest(): GreeterRequest {
  return { name: "" };
}

export const GreeterRequest = {
  encode(message: GreeterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GreeterRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGreeterRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GreeterRequest {
    return { name: isSet(object.name) ? String(object.name) : "" };
  },

  toJSON(message: GreeterRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create<I extends Exact<DeepPartial<GreeterRequest>, I>>(base?: I): GreeterRequest {
    return GreeterRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GreeterRequest>, I>>(object: I): GreeterRequest {
    const message = createBaseGreeterRequest();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseGretterReply(): GretterReply {
  return { message: "" };
}

export const GretterReply = {
  encode(message: GretterReply, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GretterReply {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGretterReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.message = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GretterReply {
    return { message: isSet(object.message) ? String(object.message) : "" };
  },

  toJSON(message: GretterReply): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  create<I extends Exact<DeepPartial<GretterReply>, I>>(base?: I): GretterReply {
    return GretterReply.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GretterReply>, I>>(object: I): GretterReply {
    const message = createBaseGretterReply();
    message.message = object.message ?? "";
    return message;
  },
};

export type GreeterService = typeof GreeterService;
export const GreeterService = {
  sayHello: {
    path: "/greeter.Greeter/SayHello",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GreeterRequest) => Buffer.from(GreeterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GreeterRequest.decode(value),
    responseSerialize: (value: GretterReply) => Buffer.from(GretterReply.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GretterReply.decode(value),
  },
} as const;

export interface GreeterServer extends UntypedServiceImplementation {
  sayHello: handleUnaryCall<GreeterRequest, GretterReply>;
}

export interface GreeterClient extends Client {
  sayHello(
    request: GreeterRequest,
    callback: (error: ServiceError | null, response: GretterReply) => void,
  ): ClientUnaryCall;
  sayHello(
    request: GreeterRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GretterReply) => void,
  ): ClientUnaryCall;
  sayHello(
    request: GreeterRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GretterReply) => void,
  ): ClientUnaryCall;
}

export const GreeterClient = makeGenericClientConstructor(GreeterService, "greeter.Greeter") as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): GreeterClient;
  service: typeof GreeterService;
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
