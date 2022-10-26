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

public interface SituationSetOrBuilder extends
    // @@protoc_insertion_point(interface_extends:SituationSet)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>.google.protobuf.Timestamp timestamp = 1;</code>
   * @return Whether the timestamp field is set.
   */
  boolean hasTimestamp();
  /**
   * <code>.google.protobuf.Timestamp timestamp = 1;</code>
   * @return The timestamp.
   */
  com.google.protobuf.Timestamp getTimestamp();
  /**
   * <code>.google.protobuf.Timestamp timestamp = 1;</code>
   */
  com.google.protobuf.TimestampOrBuilder getTimestampOrBuilder();

  /**
   * <code>repeated .Situation situations = 2;</code>
   */
  java.util.List<Situation>
      getSituationsList();
  /**
   * <code>repeated .Situation situations = 2;</code>
   */
  Situation getSituations(int index);
  /**
   * <code>repeated .Situation situations = 2;</code>
   */
  int getSituationsCount();
  /**
   * <code>repeated .Situation situations = 2;</code>
   */
  java.util.List<? extends SituationOrBuilder>
      getSituationsOrBuilderList();
  /**
   * <code>repeated .Situation situations = 2;</code>
   */
  SituationOrBuilder getSituationsOrBuilder(
      int index);
}
