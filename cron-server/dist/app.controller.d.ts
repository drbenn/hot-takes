import { AppService } from './app.service';
import { WorkflowService } from './workflow/workflow.service';
import { Logger } from 'winston';
export declare class AppController {
    private readonly appService;
    private workflowService;
    private readonly logger;
    constructor(appService: AppService, workflowService: WorkflowService, logger: Logger);
    getHello(): string;
    getContributors(): Promise<import("./app.models").ContributorForPrompting[]>;
    newPosts(): Promise<void>;
}
