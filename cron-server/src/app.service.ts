/* eslint-disable prettier/prettier */
import { Inject, Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { DbService } from './db/db.service';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Cron, CronExpression } from '@nestjs/schedule';
import { WorkflowService } from './workflow/workflow.service';

@Injectable()
export class AppService implements OnModuleInit {

  constructor(
    private dbService: DbService,
    private workflowService: WorkflowService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {}

  onModuleInit() {
    this.logger.log('info',`Application Initialized:  ${new Date()}`);

  };

  getHello(): string {
    return 'Hello World! Hot Takes Cron Server is running!';
  }

  async getContributors() {
    const contributors = await this.dbService.getAllContributors()
    return contributors;
  }

  @Cron(CronExpression.EVERY_10_SECONDS)
  cron10seconds() {
    this.logger.log('info',`Cron every 10 seconds in APP SERVICE:  ${new Date()}`);
  };

  // @Cron(CronExpression.EVERY_MINUTE)
  // cron1min() {
  //   this.logger.log('info',`Cron every 1 min in APP SERVICE:  ${new Date()}`);
  // };

  // @Cron(CronExpression.EVERY_5_MINUTES)
  // cron5minutes() {
  //   this.logger.log('info',`Cron job  every 5 min executed:  ${new Date()}`);
  //   const maxPostDelayHours: number = 1/12; // Number of hours the posting cycle should conclude in 
  //   this.workflowService.aiPostWorkFlow(maxPostDelayHours);
  // };



};
