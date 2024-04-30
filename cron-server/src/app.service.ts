/* eslint-disable prettier/prettier */
import { Injectable, OnModuleInit } from '@nestjs/common';
// import { ChatGptService } from './chat-gpt/chat-gpt.service';
// import { CronService } from './cron/cron.service';
// import { HeadlineScrapeService } from './headline-scrape/headline-scrape.service';
import { DbService } from './db/db.service';
import { ContributorForPrompting } from './app.models';
// import { NewsStory } from './app.models';

@Injectable()
export class AppService implements OnModuleInit {

  constructor(
    // private cronService: CronService,
    // private headlineService: HeadlineScrapeService,
    private dbService: DbService,
    // private chatGptService: ChatGptService,
  ) {}


  getHello(): string {
    return 'Hello World! Hot Takes Cron Server is running!';
  }

  async getContributors() {
    const contributors = await this.dbService.getAllContributors()
    return contributors;
  }

  onModuleInit() {
    console.log('Function executed on server start!');
    // this.dbService.insertPost({
    //   contributor_id: 1,
    //   headline: 'Something hassened 1',
    //   content_snippet: 'snippet',
    //   link: 'https://junk.com',
    //   post: 'this happened 1'
    // })
    // this.headlineService.getLatestHeadlines();

    // this.chatGptService.generateAiPost();
  };

};
