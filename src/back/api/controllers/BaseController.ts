import { RequestHandler } from "express";

export abstract class BaseController {
    public abstract handler: RequestHandler
}