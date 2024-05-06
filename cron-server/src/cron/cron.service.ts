import { Inject, Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { WorkflowService } from 'src/workflow/workflow.service';
import { Logger } from 'winston';

@Injectable()
export class CronService {

  constructor(
    private workflowService: WorkflowService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ){}
  /**
   * NOTE: CronService does not need to be called in appService, or elsewhere.
   * Will run automatically.
   */
  // @Cron(CronExpression.EVERY_10_SECONDS)
  // cron10seconds() {
  //   this.logger.log('info',`Cron every 10 seconds in CRON SERVICE:  ${new Date()}`);
  // };
  // @Cron(CronExpression.EVERY_10_MINUTES)
  // cron30seconds() {
  //   // Your business logic here
  //   // console.log('Cron task executed every 30 sec');
  //   // console.log(new Date());
  //   this.logger.log('info',`Cron job executed:  ${new Date()}`);
  //   // this.logger.log('log', `logging stuff! ${new Date()} \n
  //   // NEW LINE YOLO
  //   // `)
  //   this.workflowService.aiPostWorkFlow();
  // };
  // @Cron(CronExpression.EVERY_10_MINUTES)
  // cron10min() {
  //     // Your business logic here
  //     console.log('Cron task executed every 10 min');
  //     // console.log(new Date());
  //     this.workflowService.workflowActive();
  // };
  
  // @Cron('0 8 * * *', {
  //     timeZone: 'America/New_York',
  // })
  // cron8am() {
  //     // console.log('=================================================');
  //     // console.log('=================================================');
  //     // console.log('=============   8:00 AM CRON JOB   ==============');
  //     // console.log(`=============    ${new Date()}     ==============`);
  //     // console.log('=================================================');
  //     // console.log('=================================================');
  //     this.workflowService.workflowActive();
  // };

  // @Cron('0 18 * * *', {
  //     timeZone: 'America/New_York',
  // })
  // cron8pm() {
  //     // console.log('=================================================');
  //     // console.log('=================================================');
  //     // console.log('=============   8:00 PM CRON JOB   ==============');
  //     // console.log(`=============    ${new Date()}     ==============`);
  //     // console.log('=================================================');
  //     // console.log('=================================================');
  //     this.workflowService.workflowActive();
  // };
  // @Cron('32 17 * * *', {
  //     timeZone: 'America/New_York',
  //     })
  //     handleCron3() {
  //     // Wait for 25 seconds before executing the task
  //     setTimeout(() => {
  //         console.log('Cron job executed at 5:32:25 PM Eastern Time');
  //         // Your scheduled task logic here
  //     }, 25000);
  //     }
  //   @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
  //   handleCron() {
  //     // Your business logic here
  //     console.log('Cron task executed at midnight');
  //   }
  //   @Cron(CronExpression.EVERY_30_SECONDS)
  //   handleCron2() {
  //     // Your business logic here
  //     console.log('Cron task executed every 30 sec');
  //     console.log(new Date());
  //   }
  //   @Cron('0 8 * * *', {
  //     timeZone: 'America/New_York',
  //   })
  //   handleCronMorning() {
  //     console.log('Cron job executed at 8:00 AM Eastern Time');
  //   }
  
  //   @Cron('0 12 * * *', {
  //     timeZone: 'America/New_York',
  //   })
  //   handleCronNoon() {
  //     console.log('Cron job executed at 12:00 PM Eastern Time');
  //   }
}
