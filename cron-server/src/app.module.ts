import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatGptModule } from './chat-gpt/chat-gpt.module';
import { CronModule } from './cron/cron.module';
import { HeadlineScrapeModule } from './headline-scrape/headline-scrape.module';
import { DbModule } from './db/db.module';
import { ConfigModule } from '@nestjs/config';
import { MysqlModule } from 'nest-mysql';
import { DbService } from './db/db.service';
import { ChatGptService } from './chat-gpt/chat-gpt.service';
import { HttpModule } from '@nestjs/axios';
import { WorkflowModule } from './workflow/workflow.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MysqlModule.forRoot({
      host: process.env.DATABASE_HOST,
      database: process.env.DATABASE_NAME,
      password: process.env.DATABASE_PASSWORD,
      user: process.env.DATABASE_USER,
      port: parseInt(process.env.DATABASE_PORT),      
  }),
    ChatGptModule,
    CronModule,
    HeadlineScrapeModule,
    DbModule,
    HttpModule,
    WorkflowModule
  ],
  controllers: [AppController], // can remove AppController, this is only for CRUD which server will not have(other than for testing)
  // controllers: [],
  providers: [AppService, DbService, ChatGptService],
})
export class AppModule {}
