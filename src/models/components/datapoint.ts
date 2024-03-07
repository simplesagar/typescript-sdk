/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import { Expose, Transform, Type } from "class-transformer";

export class History extends SpeakeasyBase {}

/**
 * Arbitrary JSON object containing the inputs for the datapoint
 */
export class Inputs extends SpeakeasyBase {}

export class Metadata extends SpeakeasyBase {}

export class Datapoint extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "ground_truth" })
    groundTruth?: Record<string, any>;

    /**
     * Update history for the datapoint
     */
    @SpeakeasyMetadata({ elemType: History })
    @Expose({ name: "history" })
    @Type(() => History)
    history?: History[];

    /**
     * Arbitrary JSON object containing the inputs for the datapoint
     */
    @SpeakeasyMetadata()
    @Expose({ name: "inputs" })
    @Type(() => Inputs)
    inputs?: Inputs;

    /**
     * Ids of all datasets that include the datapoint
     */
    @SpeakeasyMetadata()
    @Expose({ name: "linked_datasets" })
    linkedDatasets?: string[];

    /**
     * Ids of evaluations where the datapoint is included
     */
    @SpeakeasyMetadata()
    @Expose({ name: "linked_evals" })
    linkedEvals?: string[];

    /**
     * Event id for the event from which the datapoint was created
     */
    @SpeakeasyMetadata()
    @Expose({ name: "linked_event" })
    linkedEvent?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "metadata" })
    @Type(() => Metadata)
    metadata?: Metadata;

    @SpeakeasyMetadata()
    @Expose({ name: "project_id" })
    projectId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "saved" })
    saved?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "tenant" })
    tenant?: string;

    /**
     * evaluation or event - specify the type of usage
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "updated_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    updatedAt?: Date;
}
