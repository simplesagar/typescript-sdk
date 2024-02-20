/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import { RFCDate } from "../../types";
import { Expose, Transform, Type } from "class-transformer";

export class CreateDatapointRequestInputs extends SpeakeasyBase {}

export class CreateDatapointRequestHistory extends SpeakeasyBase {}

export class CreateDatapointRequestMetadata extends SpeakeasyBase {}

export class CreateDatapointRequest extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "project" })
    project?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "inputs" })
    @Type(() => CreateDatapointRequestInputs)
    inputs?: CreateDatapointRequestInputs;

    @SpeakeasyMetadata({ elemType: CreateDatapointRequestHistory })
    @Expose({ name: "history" })
    @Type(() => CreateDatapointRequestHistory)
    history?: CreateDatapointRequestHistory[];

    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    @Type(() => String)
    @Transform(({ value }) => new RFCDate(value), { toClassOnly: true })
    createdAt?: RFCDate;

    @SpeakeasyMetadata()
    @Expose({ name: "updated_at" })
    @Type(() => String)
    @Transform(({ value }) => new RFCDate(value), { toClassOnly: true })
    updatedAt?: RFCDate;

    @SpeakeasyMetadata()
    @Expose({ name: "ground_truth" })
    groundTruth?: Record<string, any>;

    @SpeakeasyMetadata()
    @Expose({ name: "linked_event" })
    linkedEvent?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "linked_evals" })
    linkedEvals?: string[];

    @SpeakeasyMetadata()
    @Expose({ name: "linked_datasets" })
    linkedDatasets?: string[];

    @SpeakeasyMetadata()
    @Expose({ name: "saved" })
    saved?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "metadata" })
    @Type(() => CreateDatapointRequestMetadata)
    metadata?: CreateDatapointRequestMetadata;
}
