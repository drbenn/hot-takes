import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MysqlModule } from 'nest-mysql';
import { CronModule } from './cron/cron.module';


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
    CronModule
  ],
  controllers: [AppController], // can remove AppController, this is only for CRUD which server will not have(other than for testing)
  // controllers: [],
  providers: [AppService],
})
export class AppModule {}
