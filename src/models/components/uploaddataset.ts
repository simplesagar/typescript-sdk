/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The request object for uploading a dataset
 */
export class UploadDataset extends SpeakeasyBase {
    /**
     * The name of the dataset
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    /**
     * The task related to the dataset
     */
    @SpeakeasyMetadata()
    @Expose({ name: "task" })
    task?: string;

    /**
     * The prompt related to the dataset
     */
    @SpeakeasyMetadata()
    @Expose({ name: "prompt" })
    prompt?: string;

    /**
     * The purpose of the dataset
     */
    @SpeakeasyMetadata()
    @Expose({ name: "purpose" })
    purpose?: string;

    /**
     * The description of the dataset
     */
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "file" })
    file?: Record<string, any>[];
}
