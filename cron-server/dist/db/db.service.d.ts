import { Connection } from 'mysql2';
import { ContributorForPrompting } from 'src/app.models';
export declare class DbService {
    private readonly connection;
    constructor(connection: Connection);
    insertPost(contributor: ContributorForPrompting, post: string): Promise<any>;
    getAllContributors(): Promise<ContributorForPrompting[]>;
}
