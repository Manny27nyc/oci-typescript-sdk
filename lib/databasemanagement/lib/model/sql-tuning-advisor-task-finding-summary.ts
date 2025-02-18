/**
 * Database Management API
 * Use the Database Management API to perform tasks such as obtaining performance and resource usage metrics
for a fleet of Managed Databases or a specific Managed Database, creating Managed Database Groups, and
running a SQL job on a Managed Database or Managed Database Group.

 * OpenAPI spec version: 20201101
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * A summary for all the findings of objects in a tuning task that match a given certain filter.
 * Includes what kind of findings were found, whether benefits were analyzed, and how many benefits can be obtained.
 *
 */
export interface SqlTuningAdvisorTaskFindingSummary {
  /**
   * Unique identifier of the task. It is not the [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm). Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "sqlTuningAdvisorTaskId": number;
  /**
   * Key of the object to which these recommendations apply.
   * It is not the [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm).
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "sqlTuningAdvisorTaskObjectId": number;
  /**
   * Execution id of the analyzed SQL object. It is not the [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm). Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "sqlTuningAdvisorTaskObjectExecutionId": number;
  /**
   * Text of the SQL statement.
   */
  "sqlText": string;
  /**
   * Parsing schema of the object.
   */
  "parsingSchema": string;
  /**
   * Unique key of this SQL statement
   */
  "sqlKey": string;
  /**
   * Time benefit in seconds for the highest-rated finding for this object. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "dbTimeBenefit"?: number;
  /**
   * The per-execution percentage benefit. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "perExecutionPercentage"?: number;
  /**
   * Whether a statistics recommendation was found for this SQL statement.
   */
  "isStatsFindingPresent"?: boolean;
  /**
   * Whether a SQL Profile recommendation was found for this SQL statement.
   */
  "isSqlProfileFindingPresent"?: boolean;
  /**
   * Whether a SQL Profile recommendation has been implemented for this SQL statement.
   */
  "isSqlProfileFindingImplemented"?: boolean;
  /**
   * Whether an index recommendation was found for this SQL statement.
   */
  "isIndexFindingPresent"?: boolean;
  /**
   * Whether a restructure SQL recommendation was found for this SQL statement.
   */
  "isRestructureSqlFindingPresent"?: boolean;
  /**
   * Whether an alternative execution plan was found for this SQL statement.
   */
  "isAlternativePlanFindingPresent"?: boolean;
  /**
   * Whether a miscellaneous finding was found for this SQL statement.
   */
  "isMiscellaneousFindingPresent"?: boolean;
  /**
   * Whether there is an error in this SQL statement.
   */
  "isErrorFindingPresent"?: boolean;
  /**
   * Whether the task timed out.
   */
  "isTimeoutFindingPresent"?: boolean;
}

export namespace SqlTuningAdvisorTaskFindingSummary {
  export function getJsonObj(obj: SqlTuningAdvisorTaskFindingSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SqlTuningAdvisorTaskFindingSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
