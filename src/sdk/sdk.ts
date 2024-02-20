/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as components from "../models/components";
import { Configurations } from "./configurations";
import { Datapoint } from "./datapoint";
import { Datasets } from "./datasets";
import { Events } from "./events";
import { Metrics } from "./metrics";
import { Prompts } from "./prompts";
import { Session } from "./session";
import { Tasks } from "./tasks";
import { Testcases } from "./testcases";
import { Tools } from "./tools";
import axios from "axios";
import { AxiosInstance } from "axios";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = ["https://api.honeyhive.ai"] as const;

/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    bearerAuth?: string;

    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;

    /**
     * Allows overriding the default server used by the SDK
     */
    serverIdx?: number;

    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
    /**
     * Allows overriding the default retry config used by the SDK
     */
    retryConfig?: utils.RetryConfig;
};

export class SDKConfiguration {
    defaultClient: AxiosInstance;
    security?: components.Security | (() => Promise<components.Security>);
    serverURL: string;
    serverDefaults: any;
    language = "typescript";
    openapiDocVersion = "1.0.1";
    sdkVersion = "0.2.3";
    genVersion = "2.263.3";
    userAgent = "speakeasy-sdk/typescript 0.2.3 2.263.3 1.0.1 HoneyHive";
    retryConfig?: utils.RetryConfig;
    public constructor(init?: Partial<SDKConfiguration>) {
        Object.assign(this, init);
    }
}

export class HoneyHive {
    public configurations: Configurations;
    public datapoint: Datapoint;
    public datasets: Datasets;
    public events: Events;
    public metrics: Metrics;
    public prompts: Prompts;
    public session: Session;
    public tasks: Tasks;
    public testcases: Testcases;
    public tools: Tools;

    private sdkConfiguration: SDKConfiguration;

    constructor(props?: SDKProps) {
        let serverURL = props?.serverURL;
        const serverIdx = props?.serverIdx ?? 0;

        if (!serverURL) {
            serverURL = ServerList[serverIdx];
        }

        const defaultClient = props?.defaultClient ?? axios.create();
        this.sdkConfiguration = new SDKConfiguration({
            defaultClient: defaultClient,
            security: new components.Security({ bearerAuth: props?.bearerAuth }),

            serverURL: serverURL,
            retryConfig: props?.retryConfig,
        });

        this.configurations = new Configurations(this.sdkConfiguration);
        this.datapoint = new Datapoint(this.sdkConfiguration);
        this.datasets = new Datasets(this.sdkConfiguration);
        this.events = new Events(this.sdkConfiguration);
        this.metrics = new Metrics(this.sdkConfiguration);
        this.prompts = new Prompts(this.sdkConfiguration);
        this.session = new Session(this.sdkConfiguration);
        this.tasks = new Tasks(this.sdkConfiguration);
        this.testcases = new Testcases(this.sdkConfiguration);
        this.tools = new Tools(this.sdkConfiguration);
    }
}
