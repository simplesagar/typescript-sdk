/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import * as components from "../../models/components";
import { AxiosResponse } from "axios";

export class PutTestcasesRequest extends SpeakeasyBase {
    /**
     * The ID of the testcase to update
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=testcase_id" })
    testcaseId: string;

    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    testcaseUpdate: components.TestcaseUpdate;
}

export class PutTestcasesResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse: AxiosResponse;
}
