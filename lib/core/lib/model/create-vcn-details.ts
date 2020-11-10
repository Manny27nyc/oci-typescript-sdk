/**
 * Core Services API
 * API covering the [Networking](/iaas/Content/Network/Concepts/overview.htm),
[Compute](/iaas/Content/Compute/Concepts/computeoverview.htm), and
[Block Volume](/iaas/Content/Block/Concepts/overview.htm) services. Use this API
to manage resources such as virtual cloud networks (VCNs), compute instances, and
block storage volumes.

 * OpenAPI spec version: 20160918
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

export interface CreateVcnDetails {
  /**
   * Deprecated. Instead use 'cidrBlocks'. It is an error to set both cidrBlock and
   * cidrBlocks.
   * Example: `10.0.0.0/16`
   *
   */
  "cidrBlock"?: string;
  /**
    * List of IPv4 CIDR blocks associated with the VCN. The CIDRs must maintain the following
* rules -
* <p>
a. The list of CIDRs provided are valid
* b. There is no overlap between different CIDRs
* c. The number of CIDRs should not exceed the max limit of CIDRs per VCN
* d. It is an error to set both cidrBlock and cidrBlocks.
* 
    */
  "cidrBlocks"?: Array<string>;
  /**
   * The OCID of the compartment to contain the VCN.
   */
  "compartmentId": string;
  /**
    * If you enable IPv6 for the VCN (see `isIpv6Enabled`), you may optionally provide an IPv6
* /48 CIDR block from the supported ranges (see [IPv6 Addresses](https://docs.cloud.oracle.com/Content/Network/Concepts/ipv6.htm).
* The addresses in this block will be considered private and cannot be accessed
* from the internet. The documentation refers to this as a *custom CIDR* for the VCN.
* <p>
If you don't provide a custom CIDR for the VCN, Oracle assigns the VCN's IPv6 /48 CIDR block.
* <p>
Regardless of whether you or Oracle assigns the `ipv6CidrBlock`,
* Oracle *also* assigns the VCN an IPv6 CIDR block for the VCN's public IP address space
* (see the `ipv6PublicCidrBlock` of the {@link Vcn} object). If you do
* not assign a custom CIDR, Oracle uses the *same* Oracle-assigned CIDR for both the private
* IP address space (`ipv6CidrBlock` in the `Vcn` object) and the public IP addreses space
* (`ipv6PublicCidrBlock` in the `Vcn` object). This means that a given VNIC might use the same
* IPv6 IP address for both private and public (internet) communication. You control whether
* an IPv6 address can be used for internet communication by using the `isInternetAccessAllowed`
* attribute in the {@link Ipv6} object.
* <p>
For important details about IPv6 addressing in a VCN, see [IPv6 Addresses](https://docs.cloud.oracle.com/Content/Network/Concepts/ipv6.htm).
* <p>
Example: `2001:0db8:0123::/48`
* 
    */
  "ipv6CidrBlock"?: string;
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a
* namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information.
   */
  "displayName"?: string;
  /**
    * A DNS label for the VCN, used in conjunction with the VNIC's hostname and
* subnet's DNS label to form a fully qualified domain name (FQDN) for each VNIC
* within this subnet (for example, `bminstance-1.subnet123.vcn1.oraclevcn.com`).
* Not required to be unique, but it's a best practice to set unique DNS labels
* for VCNs in your tenancy. Must be an alphanumeric string that begins with a letter.
* The value cannot be changed.
* <p>
You must set this value if you want instances to be able to use hostnames to
* resolve other instances in the VCN. Otherwise the Internet and VCN Resolver
* will not work.
* <p>
For more information, see
* [DNS in Your Virtual Cloud Network](https://docs.cloud.oracle.com/Content/Network/Concepts/dns.htm).
* <p>
Example: `vcn1`
* 
    */
  "dnsLabel"?: string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no
* predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Whether IPv6 is enabled for the VCN. Default is `false`. You cannot change this later.
* For important details about IPv6 addressing in a VCN, see [IPv6 Addresses](https://docs.cloud.oracle.com/Content/Network/Concepts/ipv6.htm).
* <p>
Example: `true`
* 
    */
  "isIpv6Enabled"?: boolean;
}

export namespace CreateVcnDetails {
  export function getJsonObj(obj: CreateVcnDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
