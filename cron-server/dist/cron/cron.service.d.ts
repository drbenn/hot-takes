import { WorkflowService } from 'src/workflow/workflow.service';
export declare class CronService {
    private workflowService;
    constructor(workflowService: WorkflowService);
    cron8am(): void;
    cron8pm(): void;
}
