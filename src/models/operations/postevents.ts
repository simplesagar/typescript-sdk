/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import * as components from "../../models/components";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class PostEventsRequestBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "event" })
    @Type(() => components.Event)
    event?: components.Event;
}

/**
 * Event created
 */
export class PostEventsResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "event_id" })
    eventId?: string;
}

export class PostEventsResponse extends SpeakeasyBase {
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
     * Event created
     */
    @SpeakeasyMetadata()
    object?: PostEventsResponseBody;
}
