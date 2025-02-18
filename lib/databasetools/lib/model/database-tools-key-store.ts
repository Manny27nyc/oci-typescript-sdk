/**
 * Database Tools
 * Database Tools APIs to manage Connections and Private Endpoints.
 * OpenAPI spec version: 20201005
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
 * The details of the key store.
 */
export interface DatabaseToolsKeyStore {
  /**
   * The key store type.
   */
  "keyStoreType"?: model.KeyStoreType;
  "keyStoreContent"?: model.DatabaseToolsKeyStoreContentSecretId;
  "keyStorePassword"?: model.DatabaseToolsKeyStorePasswordSecretId;
}

export namespace DatabaseToolsKeyStore {
  export function getJsonObj(obj: DatabaseToolsKeyStore): object {
    const jsonObj = {
      ...obj,
      ...{
        "keyStoreContent": obj.keyStoreContent
          ? model.DatabaseToolsKeyStoreContent.getJsonObj(obj.keyStoreContent)
          : undefined,
        "keyStorePassword": obj.keyStorePassword
          ? model.DatabaseToolsKeyStorePassword.getJsonObj(obj.keyStorePassword)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DatabaseToolsKeyStore): object {
    const jsonObj = {
      ...obj,
      ...{
        "keyStoreContent": obj.keyStoreContent
          ? model.DatabaseToolsKeyStoreContent.getDeserializedJsonObj(obj.keyStoreContent)
          : undefined,
        "keyStorePassword": obj.keyStorePassword
          ? model.DatabaseToolsKeyStorePassword.getDeserializedJsonObj(obj.keyStorePassword)
          : undefined
      }
    };

    return jsonObj;
  }
}
