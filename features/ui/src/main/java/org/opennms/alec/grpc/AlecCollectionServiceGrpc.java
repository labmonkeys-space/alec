/*******************************************************************************
 * This file is part of OpenNMS(R).
 *
 * Copyright (C) 2022 The OpenNMS Group, Inc.
 * OpenNMS(R) is Copyright (C) 1999-2022 The OpenNMS Group, Inc.
 *
 * OpenNMS(R) is a registered trademark of The OpenNMS Group, Inc.
 *
 * OpenNMS(R) is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License,
 * or (at your option) any later version.
 *
 * OpenNMS(R) is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with OpenNMS(R).  If not, see:
 *      http://www.gnu.org/licenses/
 *
 * For more information contact:
 *     OpenNMS(R) Licensing <license@opennms.org>
 *     http://www.opennms.org/
 *     http://www.opennms.com/
 *******************************************************************************/

// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: situationset.proto

package org.opennms.alec.grpc;

import static io.grpc.MethodDescriptor.generateFullMethodName;

/**
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.46.0)",
    comments = "Source: situationset.proto")
@io.grpc.stub.annotations.GrpcGenerated
public final class AlecCollectionServiceGrpc {

  private AlecCollectionServiceGrpc() {}

  public static final String SERVICE_NAME = "AlecCollectionService";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<SituationSet,
      com.google.protobuf.Empty> getSendSituationsMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "SendSituations",
      requestType = SituationSet.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<SituationSet,
      com.google.protobuf.Empty> getSendSituationsMethod() {
    io.grpc.MethodDescriptor<SituationSet, com.google.protobuf.Empty> getSendSituationsMethod;
    if ((getSendSituationsMethod = AlecCollectionServiceGrpc.getSendSituationsMethod) == null) {
      synchronized (AlecCollectionServiceGrpc.class) {
        if ((getSendSituationsMethod = AlecCollectionServiceGrpc.getSendSituationsMethod) == null) {
          AlecCollectionServiceGrpc.getSendSituationsMethod = getSendSituationsMethod =
              io.grpc.MethodDescriptor.<SituationSet, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "SendSituations"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  SituationSet.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
              .setSchemaDescriptor(new AlecCollectionServiceMethodDescriptorSupplier("SendSituations"))
              .build();
        }
      }
    }
    return getSendSituationsMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static AlecCollectionServiceStub newStub(io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<AlecCollectionServiceStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<AlecCollectionServiceStub>() {
        @Override
        public AlecCollectionServiceStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new AlecCollectionServiceStub(channel, callOptions);
        }
      };
    return AlecCollectionServiceStub.newStub(factory, channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static AlecCollectionServiceBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<AlecCollectionServiceBlockingStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<AlecCollectionServiceBlockingStub>() {
        @Override
        public AlecCollectionServiceBlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new AlecCollectionServiceBlockingStub(channel, callOptions);
        }
      };
    return AlecCollectionServiceBlockingStub.newStub(factory, channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static AlecCollectionServiceFutureStub newFutureStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<AlecCollectionServiceFutureStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<AlecCollectionServiceFutureStub>() {
        @Override
        public AlecCollectionServiceFutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new AlecCollectionServiceFutureStub(channel, callOptions);
        }
      };
    return AlecCollectionServiceFutureStub.newStub(factory, channel);
  }

  /**
   */
  public static abstract class AlecCollectionServiceImplBase implements io.grpc.BindableService {

    /**
     */
    public void sendSituations(SituationSet request,
                               io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getSendSituationsMethod(), responseObserver);
    }

    @Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getSendSituationsMethod(),
            io.grpc.stub.ServerCalls.asyncUnaryCall(
              new MethodHandlers<
                SituationSet,
                com.google.protobuf.Empty>(
                  this, METHODID_SEND_SITUATIONS)))
          .build();
    }
  }

  /**
   */
  public static final class AlecCollectionServiceStub extends io.grpc.stub.AbstractAsyncStub<AlecCollectionServiceStub> {
    private AlecCollectionServiceStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @Override
    protected AlecCollectionServiceStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new AlecCollectionServiceStub(channel, callOptions);
    }

    /**
     */
    public void sendSituations(SituationSet request,
                               io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getSendSituationsMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   */
  public static final class AlecCollectionServiceBlockingStub extends io.grpc.stub.AbstractBlockingStub<AlecCollectionServiceBlockingStub> {
    private AlecCollectionServiceBlockingStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @Override
    protected AlecCollectionServiceBlockingStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new AlecCollectionServiceBlockingStub(channel, callOptions);
    }

    /**
     */
    public com.google.protobuf.Empty sendSituations(SituationSet request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getSendSituationsMethod(), getCallOptions(), request);
    }
  }

  /**
   */
  public static final class AlecCollectionServiceFutureStub extends io.grpc.stub.AbstractFutureStub<AlecCollectionServiceFutureStub> {
    private AlecCollectionServiceFutureStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @Override
    protected AlecCollectionServiceFutureStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new AlecCollectionServiceFutureStub(channel, callOptions);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> sendSituations(
        SituationSet request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getSendSituationsMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_SEND_SITUATIONS = 0;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final AlecCollectionServiceImplBase serviceImpl;
    private final int methodId;

    MethodHandlers(AlecCollectionServiceImplBase serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @Override
    @SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_SEND_SITUATIONS:
          serviceImpl.sendSituations((SituationSet) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
          break;
        default:
          throw new AssertionError();
      }
    }

    @Override
    @SuppressWarnings("unchecked")
    public io.grpc.stub.StreamObserver<Req> invoke(
        io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        default:
          throw new AssertionError();
      }
    }
  }

  private static abstract class AlecCollectionServiceBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    AlecCollectionServiceBaseDescriptorSupplier() {}

    @Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return SituationSetProtos.getDescriptor();
    }

    @Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("AlecCollectionService");
    }
  }

  private static final class AlecCollectionServiceFileDescriptorSupplier
      extends AlecCollectionServiceBaseDescriptorSupplier {
    AlecCollectionServiceFileDescriptorSupplier() {}
  }

  private static final class AlecCollectionServiceMethodDescriptorSupplier
      extends AlecCollectionServiceBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final String methodName;

    AlecCollectionServiceMethodDescriptorSupplier(String methodName) {
      this.methodName = methodName;
    }

    @Override
    public com.google.protobuf.Descriptors.MethodDescriptor getMethodDescriptor() {
      return getServiceDescriptor().findMethodByName(methodName);
    }
  }

  private static volatile io.grpc.ServiceDescriptor serviceDescriptor;

  public static io.grpc.ServiceDescriptor getServiceDescriptor() {
    io.grpc.ServiceDescriptor result = serviceDescriptor;
    if (result == null) {
      synchronized (AlecCollectionServiceGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new AlecCollectionServiceFileDescriptorSupplier())
              .addMethod(getSendSituationsMethod())
              .build();
        }
      }
    }
    return result;
  }
}
