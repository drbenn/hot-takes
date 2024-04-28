"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkflowModule = void 0;
const common_1 = require("@nestjs/common");
const workflow_service_1 = require("./workflow.service");
const db_service_1 = require("../db/db.service");
const db_module_1 = require("../db/db.module");
const chat_gpt_service_1 = require("../chat-gpt/chat-gpt.service");
const headline_scrape_service_1 = require("../headline-scrape/headline-scrape.service");
const chat_gpt_module_1 = require("../chat-gpt/chat-gpt.module");
const headline_scrape_module_1 = require("../headline-scrape/headline-scrape.module");
let WorkflowModule = class WorkflowModule {
};
exports.WorkflowModule = WorkflowModule;
exports.WorkflowModule = WorkflowModule = __decorate([
    (0, common_1.Module)({
        imports: [
            db_module_1.DbModule,
            headline_scrape_module_1.HeadlineScrapeModule,
            chat_gpt_module_1.ChatGptModule,
        ],
        providers: [
            workflow_service_1.WorkflowService,
            db_service_1.DbService,
            headline_scrape_service_1.HeadlineScrapeService,
            chat_gpt_service_1.ChatGptService,
        ],
        exports: [workflow_service_1.WorkflowService]
    })
], WorkflowModule);
//# sourceMappingURL=workflow.module.js.map