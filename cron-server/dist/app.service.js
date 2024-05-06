"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const db_service_1 = require("./db/db.service");
const nest_winston_1 = require("nest-winston");
const schedule_1 = require("@nestjs/schedule");
const workflow_service_1 = require("./workflow/workflow.service");
let AppService = class AppService {
    constructor(dbService, workflowService, logger) {
        this.dbService = dbService;
        this.workflowService = workflowService;
        this.logger = logger;
    }
    onModuleInit() {
        this.logger.log('info', `Application Initialized:  ${new Date()}`);
    }
    ;
    getHello() {
        return 'Hello World! Hot Takes Cron Server is running!';
    }
    async getContributors() {
        const contributors = await this.dbService.getAllContributors();
        return contributors;
    }
    cron10seconds() {
        this.logger.log('info', `Cron every 10 seconds in APP SERVICE:  ${new Date()}`);
    }
    ;
};
exports.AppService = AppService;
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_10_SECONDS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppService.prototype, "cron10seconds", null);
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [db_service_1.DbService,
        workflow_service_1.WorkflowService,
        common_1.Logger])
], AppService);
;
//# sourceMappingURL=app.service.js.map