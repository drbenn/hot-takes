import { OnModuleInit } from '@nestjs/common';
import { DbService } from './db/db.service';
import { ContributorForPrompting } from './app.models';
export declare class AppService implements OnModuleInit {
    private dbService;
    constructor(dbService: DbService);
    getHello(): string;
    getContributors(): Promise<ContributorForPrompting[]>;
    onModuleInit(): void;
}
