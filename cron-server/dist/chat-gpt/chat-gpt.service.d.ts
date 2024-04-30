import { ContributorForPrompting } from 'src/app.models';
import { DbService } from 'src/db/db.service';
export declare class ChatGptService {
    private dbService;
    constructor(dbService: DbService);
    generateAiPost(contributor: ContributorForPrompting): Promise<void>;
}
