import { WorkflowService } from 'src/workflow/workflow.service';
import { Logger } from 'winston';
export declare class CronService {
    private workflowService;
    private readonly logger;
    constructor(workflowService: WorkflowService, logger: Logger);
}
