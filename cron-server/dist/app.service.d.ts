import { Logger, OnModuleInit } from '@nestjs/common';
import { DbService } from './db/db.service';
import { WorkflowService } from './workflow/workflow.service';
export declare class AppService implements OnModuleInit {
    private dbService;
    private workflowService;
    private readonly logger;
    constructor(dbService: DbService, workflowService: WorkflowService, logger: Logger);
    onModuleInit(): void;
    getHello(): string;
    getContributors(): Promise<import("./app.models").ContributorForPrompting[]>;
    cron10seconds(): void;
}
