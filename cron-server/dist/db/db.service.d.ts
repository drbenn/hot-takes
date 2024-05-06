import { Connection } from 'mysql2';
import { ContributorForPrompting } from 'src/app.models';
import { Logger } from 'winston';
export declare class DbService {
    private readonly connection;
    private readonly logger;
    constructor(connection: Connection, logger: Logger);
    insertPost(contributor: ContributorForPrompting, post: string): Promise<any>;
    getAllContributors(): Promise<ContributorForPrompting[]>;
}
