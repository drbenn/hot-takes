import { ContributorForPrompting } from 'src/app.models';
import { DbService } from 'src/db/db.service';
import { Logger } from 'winston';
export declare class ChatGptService {
    private dbService;
    private readonly logger;
    constructor(dbService: DbService, logger: Logger);
    generateAiPost(contributor: ContributorForPrompting): Promise<void>;
}
