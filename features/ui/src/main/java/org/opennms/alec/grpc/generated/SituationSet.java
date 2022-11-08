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

package org.opennms.alec.grpc.generated;

/**
 * Protobuf type {@code SituationSet}
 */
public final class SituationSet extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:SituationSet)
    SituationSetOrBuilder {
private static final long serialVersionUID = 0L;
  // Use SituationSet.newBuilder() to construct.
  private SituationSet(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private SituationSet() {
    situations_ = java.util.Collections.emptyList();
  }

  @java.lang.Override
  @SuppressWarnings({"unused"})
  protected java.lang.Object newInstance(
      UnusedPrivateParameter unused) {
    return new SituationSet();
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return this.unknownFields;
  }
  private SituationSet(
      com.google.protobuf.CodedInputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    this();
    if (extensionRegistry == null) {
      throw new java.lang.NullPointerException();
    }
    int mutable_bitField0_ = 0;
    com.google.protobuf.UnknownFieldSet.Builder unknownFields =
        com.google.protobuf.UnknownFieldSet.newBuilder();
    try {
      boolean done = false;
      while (!done) {
        int tag = input.readTag();
        switch (tag) {
          case 0:
            done = true;
            break;
          case 10: {
            com.google.protobuf.Timestamp.Builder subBuilder = null;
            if (timestamp_ != null) {
              subBuilder = timestamp_.toBuilder();
            }
            timestamp_ = input.readMessage(com.google.protobuf.Timestamp.parser(), extensionRegistry);
            if (subBuilder != null) {
              subBuilder.mergeFrom(timestamp_);
              timestamp_ = subBuilder.buildPartial();
            }

            break;
          }
          case 18: {
            if (!((mutable_bitField0_ & 0x00000001) != 0)) {
              situations_ = new java.util.ArrayList<Situation>();
              mutable_bitField0_ |= 0x00000001;
            }
            situations_.add(
                input.readMessage(Situation.parser(), extensionRegistry));
            break;
          }
          default: {
            if (!parseUnknownField(
                input, unknownFields, extensionRegistry, tag)) {
              done = true;
            }
            break;
          }
        }
      }
    } catch (com.google.protobuf.InvalidProtocolBufferException e) {
      throw e.setUnfinishedMessage(this);
    } catch (java.io.IOException e) {
      throw new com.google.protobuf.InvalidProtocolBufferException(
          e).setUnfinishedMessage(this);
    } finally {
      if (((mutable_bitField0_ & 0x00000001) != 0)) {
        situations_ = java.util.Collections.unmodifiableList(situations_);
      }
      this.unknownFields = unknownFields.build();
      makeExtensionsImmutable();
    }
  }
  public static final com.google.protobuf.Descriptors.Descriptor
      getDescriptor() {
    return SituationSetProtos.internal_static_SituationSet_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return SituationSetProtos.internal_static_SituationSet_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            SituationSet.class, SituationSet.Builder.class);
  }

  public static final int TIMESTAMP_FIELD_NUMBER = 1;
  private com.google.protobuf.Timestamp timestamp_;
  /**
   * <code>.google.protobuf.Timestamp timestamp = 1;</code>
   * @return Whether the timestamp field is set.
   */
  @java.lang.Override
  public boolean hasTimestamp() {
    return timestamp_ != null;
  }
  /**
   * <code>.google.protobuf.Timestamp timestamp = 1;</code>
   * @return The timestamp.
   */
  @java.lang.Override
  public com.google.protobuf.Timestamp getTimestamp() {
    return timestamp_ == null ? com.google.protobuf.Timestamp.getDefaultInstance() : timestamp_;
  }
  /**
   * <code>.google.protobuf.Timestamp timestamp = 1;</code>
   */
  @java.lang.Override
  public com.google.protobuf.TimestampOrBuilder getTimestampOrBuilder() {
    return getTimestamp();
  }

  public static final int SITUATIONS_FIELD_NUMBER = 2;
  private java.util.List<Situation> situations_;
  /**
   * <code>repeated .Situation situations = 2;</code>
   */
  @java.lang.Override
  public java.util.List<Situation> getSituationsList() {
    return situations_;
  }
  /**
   * <code>repeated .Situation situations = 2;</code>
   */
  @java.lang.Override
  public java.util.List<? extends SituationOrBuilder>
      getSituationsOrBuilderList() {
    return situations_;
  }
  /**
   * <code>repeated .Situation situations = 2;</code>
   */
  @java.lang.Override
  public int getSituationsCount() {
    return situations_.size();
  }
  /**
   * <code>repeated .Situation situations = 2;</code>
   */
  @java.lang.Override
  public Situation getSituations(int index) {
    return situations_.get(index);
  }
  /**
   * <code>repeated .Situation situations = 2;</code>
   */
  @java.lang.Override
  public SituationOrBuilder getSituationsOrBuilder(
      int index) {
    return situations_.get(index);
  }

  private byte memoizedIsInitialized = -1;
  @java.lang.Override
  public final boolean isInitialized() {
    byte isInitialized = memoizedIsInitialized;
    if (isInitialized == 1) return true;
    if (isInitialized == 0) return false;

    memoizedIsInitialized = 1;
    return true;
  }

  @java.lang.Override
  public void writeTo(com.google.protobuf.CodedOutputStream output)
                      throws java.io.IOException {
    if (timestamp_ != null) {
      output.writeMessage(1, getTimestamp());
    }
    for (int i = 0; i < situations_.size(); i++) {
      output.writeMessage(2, situations_.get(i));
    }
    unknownFields.writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (timestamp_ != null) {
      size += com.google.protobuf.CodedOutputStream
        .computeMessageSize(1, getTimestamp());
    }
    for (int i = 0; i < situations_.size(); i++) {
      size += com.google.protobuf.CodedOutputStream
        .computeMessageSize(2, situations_.get(i));
    }
    size += unknownFields.getSerializedSize();
    memoizedSize = size;
    return size;
  }

  @java.lang.Override
  public boolean equals(final java.lang.Object obj) {
    if (obj == this) {
     return true;
    }
    if (!(obj instanceof SituationSet)) {
      return super.equals(obj);
    }
    SituationSet other = (SituationSet) obj;

    if (hasTimestamp() != other.hasTimestamp()) return false;
    if (hasTimestamp()) {
      if (!getTimestamp()
          .equals(other.getTimestamp())) return false;
    }
    if (!getSituationsList()
        .equals(other.getSituationsList())) return false;
    if (!unknownFields.equals(other.unknownFields)) return false;
    return true;
  }

  @java.lang.Override
  public int hashCode() {
    if (memoizedHashCode != 0) {
      return memoizedHashCode;
    }
    int hash = 41;
    hash = (19 * hash) + getDescriptor().hashCode();
    if (hasTimestamp()) {
      hash = (37 * hash) + TIMESTAMP_FIELD_NUMBER;
      hash = (53 * hash) + getTimestamp().hashCode();
    }
    if (getSituationsCount() > 0) {
      hash = (37 * hash) + SITUATIONS_FIELD_NUMBER;
      hash = (53 * hash) + getSituationsList().hashCode();
    }
    hash = (29 * hash) + unknownFields.hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static SituationSet parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static SituationSet parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static SituationSet parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static SituationSet parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static SituationSet parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static SituationSet parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static SituationSet parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static SituationSet parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static SituationSet parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static SituationSet parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static SituationSet parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static SituationSet parseFrom(
      com.google.protobuf.CodedInputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }

  @java.lang.Override
  public Builder newBuilderForType() { return newBuilder(); }
  public static Builder newBuilder() {
    return DEFAULT_INSTANCE.toBuilder();
  }
  public static Builder newBuilder(SituationSet prototype) {
    return DEFAULT_INSTANCE.toBuilder().mergeFrom(prototype);
  }
  @java.lang.Override
  public Builder toBuilder() {
    return this == DEFAULT_INSTANCE
        ? new Builder() : new Builder().mergeFrom(this);
  }

  @java.lang.Override
  protected Builder newBuilderForType(
      com.google.protobuf.GeneratedMessageV3.BuilderParent parent) {
    Builder builder = new Builder(parent);
    return builder;
  }
  /**
   * Protobuf type {@code SituationSet}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:SituationSet)
          SituationSetOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return SituationSetProtos.internal_static_SituationSet_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return SituationSetProtos.internal_static_SituationSet_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              SituationSet.class, SituationSet.Builder.class);
    }

    // Construct using org.opennms.alec.grpc.SituationSet.newBuilder()
    private Builder() {
      maybeForceBuilderInitialization();
    }

    private Builder(
        com.google.protobuf.GeneratedMessageV3.BuilderParent parent) {
      super(parent);
      maybeForceBuilderInitialization();
    }
    private void maybeForceBuilderInitialization() {
      if (com.google.protobuf.GeneratedMessageV3
              .alwaysUseFieldBuilders) {
        getSituationsFieldBuilder();
      }
    }
    @java.lang.Override
    public Builder clear() {
      super.clear();
      if (timestampBuilder_ == null) {
        timestamp_ = null;
      } else {
        timestamp_ = null;
        timestampBuilder_ = null;
      }
      if (situationsBuilder_ == null) {
        situations_ = java.util.Collections.emptyList();
        bitField0_ = (bitField0_ & ~0x00000001);
      } else {
        situationsBuilder_.clear();
      }
      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return SituationSetProtos.internal_static_SituationSet_descriptor;
    }

    @java.lang.Override
    public SituationSet getDefaultInstanceForType() {
      return SituationSet.getDefaultInstance();
    }

    @java.lang.Override
    public SituationSet build() {
      SituationSet result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public SituationSet buildPartial() {
      SituationSet result = new SituationSet(this);
      int from_bitField0_ = bitField0_;
      if (timestampBuilder_ == null) {
        result.timestamp_ = timestamp_;
      } else {
        result.timestamp_ = timestampBuilder_.build();
      }
      if (situationsBuilder_ == null) {
        if (((bitField0_ & 0x00000001) != 0)) {
          situations_ = java.util.Collections.unmodifiableList(situations_);
          bitField0_ = (bitField0_ & ~0x00000001);
        }
        result.situations_ = situations_;
      } else {
        result.situations_ = situationsBuilder_.build();
      }
      onBuilt();
      return result;
    }

    @java.lang.Override
    public Builder clone() {
      return super.clone();
    }
    @java.lang.Override
    public Builder setField(
        com.google.protobuf.Descriptors.FieldDescriptor field,
        java.lang.Object value) {
      return super.setField(field, value);
    }
    @java.lang.Override
    public Builder clearField(
        com.google.protobuf.Descriptors.FieldDescriptor field) {
      return super.clearField(field);
    }
    @java.lang.Override
    public Builder clearOneof(
        com.google.protobuf.Descriptors.OneofDescriptor oneof) {
      return super.clearOneof(oneof);
    }
    @java.lang.Override
    public Builder setRepeatedField(
        com.google.protobuf.Descriptors.FieldDescriptor field,
        int index, java.lang.Object value) {
      return super.setRepeatedField(field, index, value);
    }
    @java.lang.Override
    public Builder addRepeatedField(
        com.google.protobuf.Descriptors.FieldDescriptor field,
        java.lang.Object value) {
      return super.addRepeatedField(field, value);
    }
    @java.lang.Override
    public Builder mergeFrom(com.google.protobuf.Message other) {
      if (other instanceof SituationSet) {
        return mergeFrom((SituationSet)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(SituationSet other) {
      if (other == SituationSet.getDefaultInstance()) return this;
      if (other.hasTimestamp()) {
        mergeTimestamp(other.getTimestamp());
      }
      if (situationsBuilder_ == null) {
        if (!other.situations_.isEmpty()) {
          if (situations_.isEmpty()) {
            situations_ = other.situations_;
            bitField0_ = (bitField0_ & ~0x00000001);
          } else {
            ensureSituationsIsMutable();
            situations_.addAll(other.situations_);
          }
          onChanged();
        }
      } else {
        if (!other.situations_.isEmpty()) {
          if (situationsBuilder_.isEmpty()) {
            situationsBuilder_.dispose();
            situationsBuilder_ = null;
            situations_ = other.situations_;
            bitField0_ = (bitField0_ & ~0x00000001);
            situationsBuilder_ = 
              com.google.protobuf.GeneratedMessageV3.alwaysUseFieldBuilders ?
                 getSituationsFieldBuilder() : null;
          } else {
            situationsBuilder_.addAllMessages(other.situations_);
          }
        }
      }
      this.mergeUnknownFields(other.unknownFields);
      onChanged();
      return this;
    }

    @java.lang.Override
    public final boolean isInitialized() {
      return true;
    }

    @java.lang.Override
    public Builder mergeFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws java.io.IOException {
      SituationSet parsedMessage = null;
      try {
        parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        parsedMessage = (SituationSet) e.getUnfinishedMessage();
        throw e.unwrapIOException();
      } finally {
        if (parsedMessage != null) {
          mergeFrom(parsedMessage);
        }
      }
      return this;
    }
    private int bitField0_;

    private com.google.protobuf.Timestamp timestamp_;
    private com.google.protobuf.SingleFieldBuilderV3<
        com.google.protobuf.Timestamp, com.google.protobuf.Timestamp.Builder, com.google.protobuf.TimestampOrBuilder> timestampBuilder_;
    /**
     * <code>.google.protobuf.Timestamp timestamp = 1;</code>
     * @return Whether the timestamp field is set.
     */
    public boolean hasTimestamp() {
      return timestampBuilder_ != null || timestamp_ != null;
    }
    /**
     * <code>.google.protobuf.Timestamp timestamp = 1;</code>
     * @return The timestamp.
     */
    public com.google.protobuf.Timestamp getTimestamp() {
      if (timestampBuilder_ == null) {
        return timestamp_ == null ? com.google.protobuf.Timestamp.getDefaultInstance() : timestamp_;
      } else {
        return timestampBuilder_.getMessage();
      }
    }
    /**
     * <code>.google.protobuf.Timestamp timestamp = 1;</code>
     */
    public Builder setTimestamp(com.google.protobuf.Timestamp value) {
      if (timestampBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        timestamp_ = value;
        onChanged();
      } else {
        timestampBuilder_.setMessage(value);
      }

      return this;
    }
    /**
     * <code>.google.protobuf.Timestamp timestamp = 1;</code>
     */
    public Builder setTimestamp(
        com.google.protobuf.Timestamp.Builder builderForValue) {
      if (timestampBuilder_ == null) {
        timestamp_ = builderForValue.build();
        onChanged();
      } else {
        timestampBuilder_.setMessage(builderForValue.build());
      }

      return this;
    }
    /**
     * <code>.google.protobuf.Timestamp timestamp = 1;</code>
     */
    public Builder mergeTimestamp(com.google.protobuf.Timestamp value) {
      if (timestampBuilder_ == null) {
        if (timestamp_ != null) {
          timestamp_ =
            com.google.protobuf.Timestamp.newBuilder(timestamp_).mergeFrom(value).buildPartial();
        } else {
          timestamp_ = value;
        }
        onChanged();
      } else {
        timestampBuilder_.mergeFrom(value);
      }

      return this;
    }
    /**
     * <code>.google.protobuf.Timestamp timestamp = 1;</code>
     */
    public Builder clearTimestamp() {
      if (timestampBuilder_ == null) {
        timestamp_ = null;
        onChanged();
      } else {
        timestamp_ = null;
        timestampBuilder_ = null;
      }

      return this;
    }
    /**
     * <code>.google.protobuf.Timestamp timestamp = 1;</code>
     */
    public com.google.protobuf.Timestamp.Builder getTimestampBuilder() {
      
      onChanged();
      return getTimestampFieldBuilder().getBuilder();
    }
    /**
     * <code>.google.protobuf.Timestamp timestamp = 1;</code>
     */
    public com.google.protobuf.TimestampOrBuilder getTimestampOrBuilder() {
      if (timestampBuilder_ != null) {
        return timestampBuilder_.getMessageOrBuilder();
      } else {
        return timestamp_ == null ?
            com.google.protobuf.Timestamp.getDefaultInstance() : timestamp_;
      }
    }
    /**
     * <code>.google.protobuf.Timestamp timestamp = 1;</code>
     */
    private com.google.protobuf.SingleFieldBuilderV3<
        com.google.protobuf.Timestamp, com.google.protobuf.Timestamp.Builder, com.google.protobuf.TimestampOrBuilder> 
        getTimestampFieldBuilder() {
      if (timestampBuilder_ == null) {
        timestampBuilder_ = new com.google.protobuf.SingleFieldBuilderV3<
            com.google.protobuf.Timestamp, com.google.protobuf.Timestamp.Builder, com.google.protobuf.TimestampOrBuilder>(
                getTimestamp(),
                getParentForChildren(),
                isClean());
        timestamp_ = null;
      }
      return timestampBuilder_;
    }

    private java.util.List<Situation> situations_ =
      java.util.Collections.emptyList();
    private void ensureSituationsIsMutable() {
      if (!((bitField0_ & 0x00000001) != 0)) {
        situations_ = new java.util.ArrayList<Situation>(situations_);
        bitField0_ |= 0x00000001;
       }
    }

    private com.google.protobuf.RepeatedFieldBuilderV3<
            Situation, Situation.Builder, SituationOrBuilder> situationsBuilder_;

    /**
     * <code>repeated .Situation situations = 2;</code>
     */
    public java.util.List<Situation> getSituationsList() {
      if (situationsBuilder_ == null) {
        return java.util.Collections.unmodifiableList(situations_);
      } else {
        return situationsBuilder_.getMessageList();
      }
    }
    /**
     * <code>repeated .Situation situations = 2;</code>
     */
    public int getSituationsCount() {
      if (situationsBuilder_ == null) {
        return situations_.size();
      } else {
        return situationsBuilder_.getCount();
      }
    }
    /**
     * <code>repeated .Situation situations = 2;</code>
     */
    public Situation getSituations(int index) {
      if (situationsBuilder_ == null) {
        return situations_.get(index);
      } else {
        return situationsBuilder_.getMessage(index);
      }
    }
    /**
     * <code>repeated .Situation situations = 2;</code>
     */
    public Builder setSituations(
        int index, Situation value) {
      if (situationsBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        ensureSituationsIsMutable();
        situations_.set(index, value);
        onChanged();
      } else {
        situationsBuilder_.setMessage(index, value);
      }
      return this;
    }
    /**
     * <code>repeated .Situation situations = 2;</code>
     */
    public Builder setSituations(
        int index, Situation.Builder builderForValue) {
      if (situationsBuilder_ == null) {
        ensureSituationsIsMutable();
        situations_.set(index, builderForValue.build());
        onChanged();
      } else {
        situationsBuilder_.setMessage(index, builderForValue.build());
      }
      return this;
    }
    /**
     * <code>repeated .Situation situations = 2;</code>
     */
    public Builder addSituations(Situation value) {
      if (situationsBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        ensureSituationsIsMutable();
        situations_.add(value);
        onChanged();
      } else {
        situationsBuilder_.addMessage(value);
      }
      return this;
    }
    /**
     * <code>repeated .Situation situations = 2;</code>
     */
    public Builder addSituations(
        int index, Situation value) {
      if (situationsBuilder_ == null) {
        if (value == null) {
          throw new NullPointerException();
        }
        ensureSituationsIsMutable();
        situations_.add(index, value);
        onChanged();
      } else {
        situationsBuilder_.addMessage(index, value);
      }
      return this;
    }
    /**
     * <code>repeated .Situation situations = 2;</code>
     */
    public Builder addSituations(
        Situation.Builder builderForValue) {
      if (situationsBuilder_ == null) {
        ensureSituationsIsMutable();
        situations_.add(builderForValue.build());
        onChanged();
      } else {
        situationsBuilder_.addMessage(builderForValue.build());
      }
      return this;
    }
    /**
     * <code>repeated .Situation situations = 2;</code>
     */
    public Builder addSituations(
        int index, Situation.Builder builderForValue) {
      if (situationsBuilder_ == null) {
        ensureSituationsIsMutable();
        situations_.add(index, builderForValue.build());
        onChanged();
      } else {
        situationsBuilder_.addMessage(index, builderForValue.build());
      }
      return this;
    }
    /**
     * <code>repeated .Situation situations = 2;</code>
     */
    public Builder addAllSituations(
        java.lang.Iterable<? extends Situation> values) {
      if (situationsBuilder_ == null) {
        ensureSituationsIsMutable();
        com.google.protobuf.AbstractMessageLite.Builder.addAll(
            values, situations_);
        onChanged();
      } else {
        situationsBuilder_.addAllMessages(values);
      }
      return this;
    }
    /**
     * <code>repeated .Situation situations = 2;</code>
     */
    public Builder clearSituations() {
      if (situationsBuilder_ == null) {
        situations_ = java.util.Collections.emptyList();
        bitField0_ = (bitField0_ & ~0x00000001);
        onChanged();
      } else {
        situationsBuilder_.clear();
      }
      return this;
    }
    /**
     * <code>repeated .Situation situations = 2;</code>
     */
    public Builder removeSituations(int index) {
      if (situationsBuilder_ == null) {
        ensureSituationsIsMutable();
        situations_.remove(index);
        onChanged();
      } else {
        situationsBuilder_.remove(index);
      }
      return this;
    }
    /**
     * <code>repeated .Situation situations = 2;</code>
     */
    public Situation.Builder getSituationsBuilder(
        int index) {
      return getSituationsFieldBuilder().getBuilder(index);
    }
    /**
     * <code>repeated .Situation situations = 2;</code>
     */
    public SituationOrBuilder getSituationsOrBuilder(
        int index) {
      if (situationsBuilder_ == null) {
        return situations_.get(index);  } else {
        return situationsBuilder_.getMessageOrBuilder(index);
      }
    }
    /**
     * <code>repeated .Situation situations = 2;</code>
     */
    public java.util.List<? extends SituationOrBuilder>
         getSituationsOrBuilderList() {
      if (situationsBuilder_ != null) {
        return situationsBuilder_.getMessageOrBuilderList();
      } else {
        return java.util.Collections.unmodifiableList(situations_);
      }
    }
    /**
     * <code>repeated .Situation situations = 2;</code>
     */
    public Situation.Builder addSituationsBuilder() {
      return getSituationsFieldBuilder().addBuilder(
          Situation.getDefaultInstance());
    }
    /**
     * <code>repeated .Situation situations = 2;</code>
     */
    public Situation.Builder addSituationsBuilder(
        int index) {
      return getSituationsFieldBuilder().addBuilder(
          index, Situation.getDefaultInstance());
    }
    /**
     * <code>repeated .Situation situations = 2;</code>
     */
    public java.util.List<Situation.Builder>
         getSituationsBuilderList() {
      return getSituationsFieldBuilder().getBuilderList();
    }
    private com.google.protobuf.RepeatedFieldBuilderV3<
            Situation, Situation.Builder, SituationOrBuilder>
        getSituationsFieldBuilder() {
      if (situationsBuilder_ == null) {
        situationsBuilder_ = new com.google.protobuf.RepeatedFieldBuilderV3<
                Situation, Situation.Builder, SituationOrBuilder>(
                situations_,
                ((bitField0_ & 0x00000001) != 0),
                getParentForChildren(),
                isClean());
        situations_ = null;
      }
      return situationsBuilder_;
    }
    @java.lang.Override
    public final Builder setUnknownFields(
        final com.google.protobuf.UnknownFieldSet unknownFields) {
      return super.setUnknownFields(unknownFields);
    }

    @java.lang.Override
    public final Builder mergeUnknownFields(
        final com.google.protobuf.UnknownFieldSet unknownFields) {
      return super.mergeUnknownFields(unknownFields);
    }


    // @@protoc_insertion_point(builder_scope:SituationSet)
  }

  // @@protoc_insertion_point(class_scope:SituationSet)
  private static final SituationSet DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new SituationSet();
  }

  public static SituationSet getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<SituationSet>
      PARSER = new com.google.protobuf.AbstractParser<SituationSet>() {
    @java.lang.Override
    public SituationSet parsePartialFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return new SituationSet(input, extensionRegistry);
    }
  };

  public static com.google.protobuf.Parser<SituationSet> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<SituationSet> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public SituationSet getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}
