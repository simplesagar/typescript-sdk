/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import { Expose, Transform } from "class-transformer";

export class ChatCompletionResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "timestamp" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    timestamp?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "generation_id" })
    generationId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "session_id" })
    sessionId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "choices" })
    choices?: Record<string, any>[];

    @SpeakeasyMetadata()
    @Expose({ name: "stream" })
    stream?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "cost" })
    cost?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "latency" })
    latency?: number;
}
