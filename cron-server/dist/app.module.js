"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const config_1 = require("@nestjs/config");
const nest_mysql_1 = require("nest-mysql");
const cron_module_1 = require("./cron/cron.module");
const db_module_1 = require("./db/db.module");
const db_service_1 = require("./db/db.service");
const workflow_module_1 = require("./workflow/workflow.module");
const workflow_service_1 = require("./workflow/workflow.service");
const nest_winston_1 = require("nest-winston");
const winston = require("winston");
const headline_scrape_module_1 = require("./headline-scrape/headline-scrape.module");
const headline_scrape_service_1 = require("./headline-scrape/headline-scrape.service");
const chat_gpt_module_1 = require("./chat-gpt/chat-gpt.module");
const chat_gpt_service_1 = require("./chat-gpt/chat-gpt.service");
const cron_service_1 = require("./cron/cron.service");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            nest_mysql_1.MysqlModule.forRoot({
                host: process.env.DATABASE_HOST,
                database: process.env.DATABASE_NAME,
                password: process.env.DATABASE_PASSWORD,
                user: process.env.DATABASE_USER,
                port: parseInt(process.env.DATABASE_PORT),
            }),
            nest_winston_1.WinstonModule.forRootAsync({
                useFactory: () => ({
                    transports: [
                        new winston.transports.Console({
                            format: winston.format.combine(winston.format.timestamp(), nest_winston_1.utilities.format.nestLike()),
                        }),
                        new winston.transports.File({
                            filename: 'logs/error.log',
                            level: 'error',
                        }),
                        new winston.transports.File({ filename: 'logs/combined.log' }),
                    ],
                })
            }),
            cron_module_1.CronModule,
            db_module_1.DbModule,
            workflow_module_1.WorkflowModule,
            headline_scrape_module_1.HeadlineScrapeModule,
            chat_gpt_module_1.ChatGptModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, db_service_1.DbService, workflow_service_1.WorkflowService, headline_scrape_service_1.HeadlineScrapeService, chat_gpt_service_1.ChatGptService, cron_service_1.CronService],
        exports: []
    })
], AppModule);
//# sourceMappingURL=app.module.js.map