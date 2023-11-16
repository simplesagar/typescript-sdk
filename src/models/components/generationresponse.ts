/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The response object for a generation
 */
export class GenerationResponse extends SpeakeasyBase {
    /**
     * The unique ID of the generation
     */
    @SpeakeasyMetadata()
    @Expose({ name: "generation_id" })
    generationId?: string;

    /**
     * The unique ID of the prompt
     */
    @SpeakeasyMetadata()
    @Expose({ name: "version" })
    version?: string;

    /**
     * The generated completion
     */
    @SpeakeasyMetadata()
    @Expose({ name: "generation" })
    generation?: string;

    /**
     * Is stream output
     */
    @SpeakeasyMetadata()
    @Expose({ name: "stream" })
    stream?: boolean;
}
