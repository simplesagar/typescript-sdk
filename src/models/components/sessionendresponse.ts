/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The response object for ending a session
 */
export class SessionEndResponse extends SpeakeasyBase {
    /**
     * Indicates whether ending the session was successful
     */
    @SpeakeasyMetadata()
    @Expose({ name: "success" })
    success?: boolean;

    /**
     * The id of the session
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;
}
