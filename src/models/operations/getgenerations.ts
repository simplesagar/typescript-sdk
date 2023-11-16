/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import * as components from "../../models/components";
import { AxiosResponse } from "axios";

export class GetGenerationsRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=task" })
    task?: string;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prompt" })
    prompt?: string;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=model_id" })
    modelId?: string;
}

export class GetGenerationsResponse extends SpeakeasyBase {
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

    /**
     * OK
     */
    @SpeakeasyMetadata({ elemType: components.Generation })
    classes?: components.Generation[];
}
