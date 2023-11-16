/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The request object for querying session events
 */
export class SessionEventQuery extends SpeakeasyBase {
    /**
     * The ID of the event
     */
    @SpeakeasyMetadata()
    @Expose({ name: "event_id" })
    eventId?: string;

    /**
     * The ID of the session
     */
    @SpeakeasyMetadata()
    @Expose({ name: "session_id" })
    sessionId?: string;

    /**
     * The type of the event
     */
    @SpeakeasyMetadata()
    @Expose({ name: "event_type" })
    eventType?: string;

    /**
     * The project that the event belongs to
     */
    @SpeakeasyMetadata()
    @Expose({ name: "project" })
    project?: string;

    /**
     * The name for the event
     */
    @SpeakeasyMetadata()
    @Expose({ name: "event_name" })
    eventName?: string;

    /**
     * The configuration of LLM, Tool or other for the event
     */
    @SpeakeasyMetadata()
    @Expose({ name: "config" })
    config?: Record<string, any>;

    /**
     * Child events
     */
    @SpeakeasyMetadata()
    @Expose({ name: "children" })
    children?: Record<string, any>[];

    /**
     * Inputs to the event
     */
    @SpeakeasyMetadata()
    @Expose({ name: "inputs" })
    inputs?: Record<string, any>;

    /**
     * Outputs of the event
     */
    @SpeakeasyMetadata()
    @Expose({ name: "outputs" })
    outputs?: Record<string, any>;

    /**
     * User properties of the event
     */
    @SpeakeasyMetadata()
    @Expose({ name: "user_properties" })
    userProperties?: Record<string, any>;

    /**
     * Error from the event
     */
    @SpeakeasyMetadata()
    @Expose({ name: "error" })
    error?: string;

    /**
     * Source of the event
     */
    @SpeakeasyMetadata()
    @Expose({ name: "source" })
    source?: string;

    /**
     * Start time of the event
     */
    @SpeakeasyMetadata()
    @Expose({ name: "start_time" })
    startTime?: number;

    /**
     * End time of the event
     */
    @SpeakeasyMetadata()
    @Expose({ name: "end_time" })
    endTime?: number;

    /**
     * Duration of the event
     */
    @SpeakeasyMetadata()
    @Expose({ name: "duration" })
    duration?: number;

    /**
     * Metadata of the event
     */
    @SpeakeasyMetadata()
    @Expose({ name: "metadata" })
    metadata?: Record<string, any>;

    /**
     * Metrics for the event
     */
    @SpeakeasyMetadata()
    @Expose({ name: "metrics" })
    metrics?: Record<string, any>;

    /**
     * Feedback for the event
     */
    @SpeakeasyMetadata()
    @Expose({ name: "feedback" })
    feedback?: Record<string, any>;
}
