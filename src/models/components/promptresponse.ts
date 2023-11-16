/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import { Expose, Transform } from "class-transformer";

/**
 * The response object for a prompt
 */
export class PromptResponse extends SpeakeasyBase {
    /**
     * The unique name of the prompt
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    /**
     * The version of the prompt
     */
    @SpeakeasyMetadata()
    @Expose({ name: "version" })
    version?: string;

    /**
     * The task for which the prompt is being created
     */
    @SpeakeasyMetadata()
    @Expose({ name: "task" })
    task?: string;

    /**
     * The text of the prompt
     */
    @SpeakeasyMetadata()
    @Expose({ name: "text" })
    text?: string;

    /**
     * The input variables to feed into the prompt
     */
    @SpeakeasyMetadata()
    @Expose({ name: "input_variables" })
    inputVariables?: string[];

    /**
     * The model to be used for the prompt
     */
    @SpeakeasyMetadata()
    @Expose({ name: "model" })
    model?: string;

    /**
     * The hyperparameters for the prompt
     */
    @SpeakeasyMetadata()
    @Expose({ name: "hyperparameters" })
    hyperparameters?: Record<string, any>;

    /**
     * Flag indicating if the prompt is deployed
     */
    @SpeakeasyMetadata()
    @Expose({ name: "is_deployed" })
    isDeployed?: boolean;

    /**
     * The few shot examples for the prompt
     */
    @SpeakeasyMetadata()
    @Expose({ name: "few_shot_examples" })
    fewShotExamples?: Record<string, any>[];

    /**
     * The timestamp of when the prompt was created
     */
    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt?: Date;

    /**
     * The timestamp of when the prompt was last updated
     */
    @SpeakeasyMetadata()
    @Expose({ name: "updated_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    updatedAt?: Date;
}
