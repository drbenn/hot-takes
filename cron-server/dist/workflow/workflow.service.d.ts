import { ChatGptService } from 'src/chat-gpt/chat-gpt.service';
import { DbService } from 'src/db/db.service';
import { HeadlineScrapeService } from 'src/headline-scrape/headline-scrape.service';
export declare class WorkflowService {
    private dbService;
    private headlineService;
    private gptService;
    private maxPostDelayHours;
    constructor(dbService: DbService, headlineService: HeadlineScrapeService, gptService: ChatGptService);
    workflowActive(): Promise<void>;
    aiPostWorkFlow(): Promise<void>;
    private shuffleContributors;
    private addDelayForContributorPosting;
    private assignNewsStoryToContributors;
}
