/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Specify whether the event is of "model", "tool" or "chain" type
 */
export enum CreateEventRequestEventType {
    Model = "model",
    Tool = "tool",
    Chain = "chain",
}

export class CreateEventRequest extends SpeakeasyBase {
    /**
     * Project associated with the event
     */
    @SpeakeasyMetadata()
    @Expose({ name: "project" })
    project: string;

    /**
     * Source of the event - production, staging, etc
     */
    @SpeakeasyMetadata()
    @Expose({ name: "source" })
    source: string;

    /**
     * Name of the event
     */
    @SpeakeasyMetadata()
    @Expose({ name: "event_name" })
    eventName: string;

    /**
     * Specify whether the event is of "model", "tool" or "chain" type
     */
    @SpeakeasyMetadata()
    @Expose({ name: "event_type" })
    eventType: CreateEventRequestEventType;

    /**
     * Unique id of the event, if not set, it will be auto-generated
     */
    @SpeakeasyMetadata()
    @Expose({ name: "event_id" })
    eventId?: string;

    /**
     * Unique id of the session associated with the event, if not set, it will be auto-generated
     */
    @SpeakeasyMetadata()
    @Expose({ name: "session_id" })
    sessionId?: string;

    /**
     * Id of the parent event if nested
     */
    @SpeakeasyMetadata()
    @Expose({ name: "parent_id" })
    parentId?: string;

    /**
     * Id of events that are nested within the event
     */
    @SpeakeasyMetadata()
    @Expose({ name: "children_ids" })
    childrenIds?: string[];

    /**
     * Associated configuration JSON for the event - model name, vector index name, etc
     */
    @SpeakeasyMetadata()
    @Expose({ name: "config" })
    config: Record<string, any>;

    /**
     * Input JSON given to the event - prompt, chunks, etc
     */
    @SpeakeasyMetadata()
    @Expose({ name: "inputs" })
    inputs: Record<string, any>;

    /**
     * Final output JSON of the event
     */
    @SpeakeasyMetadata()
    @Expose({ name: "outputs" })
    outputs?: Record<string, any>;

    /**
     * Any error description if event failed
     */
    @SpeakeasyMetadata()
    @Expose({ name: "error" })
    error?: string;

    /**
     * UTC timestamp (in milliseconds) for the event start
     */
    @SpeakeasyMetadata()
    @Expose({ name: "start_time" })
    startTime?: number;

    /**
     * UTC timestamp (in milliseconds) for the event end
     */
    @SpeakeasyMetadata()
    @Expose({ name: "end_time" })
    endTime?: number;

    /**
     * How long the event took in milliseconds
     */
    @SpeakeasyMetadata()
    @Expose({ name: "duration" })
    duration: number;

    /**
     * Any system or application metadata associated with the event
     */
    @SpeakeasyMetadata()
    @Expose({ name: "metadata" })
    metadata?: Record<string, any>;

    /**
     * Any user feedback provided for the event output
     */
    @SpeakeasyMetadata()
    @Expose({ name: "feedback" })
    feedback?: Record<string, any>;

    /**
     * Any values computed over the output of the event
     */
    @SpeakeasyMetadata()
    @Expose({ name: "metrics" })
    metrics?: Record<string, any>;

    /**
     * Any user properties associated with the event
     */
    @SpeakeasyMetadata()
    @Expose({ name: "user_properties" })
    userProperties?: Record<string, any>;
}
