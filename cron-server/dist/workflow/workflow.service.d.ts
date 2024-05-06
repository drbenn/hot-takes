import { ChatGptService } from 'src/chat-gpt/chat-gpt.service';
import { DbService } from 'src/db/db.service';
import { HeadlineScrapeService } from 'src/headline-scrape/headline-scrape.service';
import { Logger } from 'winston';
export declare class WorkflowService {
    private dbService;
    private headlineService;
    private gptService;
    private readonly logger;
    constructor(dbService: DbService, headlineService: HeadlineScrapeService, gptService: ChatGptService, logger: Logger);
    aiPostWorkFlow(maxPostDelayHours: number): Promise<void>;
    private shuffleContributors;
    private addDelayForContributorPosting;
    private assignNewsStoryToContributors;
}
