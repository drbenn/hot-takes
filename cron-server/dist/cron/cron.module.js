"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CronModule = void 0;
const common_1 = require("@nestjs/common");
const cron_service_1 = require("./cron.service");
const schedule_1 = require("@nestjs/schedule");
const workflow_service_1 = require("../workflow/workflow.service");
const workflow_module_1 = require("../workflow/workflow.module");
const db_module_1 = require("../db/db.module");
const db_service_1 = require("../db/db.service");
const headline_scrape_module_1 = require("../headline-scrape/headline-scrape.module");
const chat_gpt_module_1 = require("../chat-gpt/chat-gpt.module");
const headline_scrape_service_1 = require("../headline-scrape/headline-scrape.service");
let CronModule = class CronModule {
};
exports.CronModule = CronModule;
exports.CronModule = CronModule = __decorate([
    (0, common_1.Module)({
        imports: [
            schedule_1.ScheduleModule.forRoot(),
            workflow_module_1.WorkflowModule,
            db_module_1.DbModule,
            headline_scrape_module_1.HeadlineScrapeModule,
            chat_gpt_module_1.ChatGptModule
        ],
        providers: [
            cron_service_1.CronService,
            workflow_service_1.WorkflowService,
            db_service_1.DbService,
            headline_scrape_service_1.HeadlineScrapeService,
            chat_gpt_module_1.ChatGptModule
        ],
        exports: [cron_service_1.CronService]
    })
], CronModule);
//# sourceMappingURL=cron.module.js.map