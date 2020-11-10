/**
 * MySQL Database Service API
 * The API for the MySQL Database Service
 * OpenAPI spec version: 20190415
 * Contact: mysql-cloud-dev_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Details required to add an Analytics Cluster.
 *
 */
export interface AddAnalyticsClusterDetails {
  /**
   * The shape determines resources to allocate to the Analytics
   * Cluster nodes - CPU cores, memory.
   *
   */
  "shapeName": string;
  /**
   * The number of analytics-processing nodes provisioned for the
   * Analytics Cluster.
   *
   */
  "clusterSize": number;
}

export namespace AddAnalyticsClusterDetails {
  export function getJsonObj(obj: AddAnalyticsClusterDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
