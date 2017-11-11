/**
 * @module common/mvc
 */
/** */
import * as Express from "express";
import {$log} from "ts-log-debug";
import {ServerSettingsService} from "../../config/services/ServerSettingsService";
import {Env} from "../../core/interfaces";
import {applyBefore} from "../../core/utils";
import {Req} from "../../filters/decorators/request";
import {Res} from "../../filters/decorators/response";
import {Middleware} from "../decorators/class/middleware";
import {IMiddleware} from "../interfaces";

/**
 * @private
 * @middleware
 */
@Middleware()
export class LogIncomingRequestMiddleware implements IMiddleware {
    private static DEFAULT_FIELDS = [
        "reqId",
        "method",
        "url",
        "duration"
    ];

    private AUTO_INCREMENT_ID = 1;
    private env: Env;
    private logRequestFields: string[];

    constructor(private serverSettingsService: ServerSettingsService) {
        this.env = serverSettingsService.env;
        this.logRequestFields = serverSettingsService.get("logRequestFields") || LogIncomingRequestMiddleware.DEFAULT_FIELDS;
    }

    /**
     * Handle the request.
     * @param {e.Request} request
     * @param {e.Response} response
     */
    public use(@Req() request: Express.Request, @Res() response: Express.Response): void {

        this.configureRequest(request);

        this.onLogStart(request);

        applyBefore(response, "end", () => this.onLogEnd(request, response));
    }

    /**
     * The separate onLogStart() function will allow developer to overwrite the initial request log.
     * @param {e.Request} request
     */
    protected onLogStart(request: Express.Request) {
        request.log.debug();
    }

    /**
     * Attach all informations that will be necessary to log the request. Attach a new `request.log` object.
     * @param request
     */
    protected configureRequest(request: Express.Request) {
        request.id = String(request.id ? request.id : this.AUTO_INCREMENT_ID++);
        request.tagId = `[#${(request as any).id}]`;
        request.tsedReqStart = new Date();

        const verbose = (req: Express.Request) => this.requestToObject(req);
        const info = (req: Express.Request) => this.minimalRequestPicker(req);
        request.log = {
            info: (obj: any) => setImmediate(() => $log.info(this.stringify(request, info)(obj))),
            debug: (obj: any) => setImmediate(() => $log.debug(this.stringify(request, verbose)(obj))),
            warn: (obj: any) => $log.warn(this.stringify(request, verbose)(obj)),
            error: (obj: any) => $log.error(this.stringify(request, verbose)(obj)),
            trace: (obj: any) => $log.trace(this.stringify(request, verbose)(obj))
        };
    }

    /**
     * Return complete request info.
     * @param request
     * @returns {Object}
     */
    protected requestToObject(request: Express.Request): any {
        return {
            reqId: request.id,
            method: request.method,
            url: request.originalUrl || request.url,
            duration: this.getDuration(request),
            headers: request.headers,
            body: request.body,
            query: request.query,
            params: request.params
        };
    }

    /**
     * Return a filtered request from global configuration.
     * @param request
     * @returns {Object}
     */
    protected minimalRequestPicker(request: Express.Request): any {
        const info = this.requestToObject(request);

        return this.logRequestFields.reduce((acc: any, key: string) => {
            acc[key] = info[key];
            return acc;
        }, {});
    }

    /**
     * Return the duration between the time when LogIncomingRequest has handle the request and now.
     * @param request
     * @returns {number}
     */
    protected getDuration(request: Express.Request): number {
        return new Date().getTime() - request.tsedReqStart.getTime();
    }

    /**
     * Stringify a request to JSON.
     * @param request
     * @param propertySelector
     * @returns {(scope: any) => string}
     */
    protected stringify(request: Express.Request, propertySelector: (e: Express.Request) => any): (scope: any) => string {
        return (scope: any = {}) => {
            if (typeof scope === "string") {
                scope = {message: scope};
            }

            scope = Object.assign(scope, propertySelector(request));

            if (this.env !== Env.PROD) {
                return JSON.stringify(scope, null, 2);
            }
            return JSON.stringify(scope);
        };
    }

    /**
     * Called when the `request.end()` is called by Express.
     * @param request
     * @param response
     */
    protected onLogEnd(request: Express.Request, response: Express.Response) {
        /* istanbul ignore else */
        if (request.id) {
            const status = (response as any)._header
                ? response.statusCode
                : undefined;
            request.log.info({status});
            request.log.debug({status, data: request.getStoredData && request.getStoredData()});
            this.cleanRequest(request);
        }
    }

    /**
     * Remove all data that added with `LogIncomingRequest.configureRequest()`.
     * @param request
     */
    protected cleanRequest(request: Express.Request) {
        setImmediate(() => {
            delete request.id;
            delete request.tagId;
            delete request.tsedReqStart;
            request.log = {
                info: () => {
                },
                debug: () => {
                },
                warn: () => {
                },
                error: () => {
                },
                trace: () => {
                }
            };
        });

    }
}