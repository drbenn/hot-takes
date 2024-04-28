import { Connection } from 'mysql2';
import { ContributorForPrompting } from 'src/app.models';
export declare class DbService {
    private readonly connection;
    constructor(connection: Connection);
    insertPost({ contributor_id, headline, content_snippet, link, post }: {
        contributor_id: any;
        headline: any;
        content_snippet: any;
        link: any;
        post: any;
    }): Promise<void>;
    getAllContributors(): Promise<ContributorForPrompting[]>;
}
