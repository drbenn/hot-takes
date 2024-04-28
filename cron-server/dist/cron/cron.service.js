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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CronService = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const workflow_service_1 = require("../workflow/workflow.service");
let CronService = class CronService {
    constructor(workflowService) {
        this.workflowService = workflowService;
    }
    cron30seconds() {
        console.log('Cron task executed every 30 sec');
        console.log(new Date());
        this.workflowService.workflowActive();
    }
    ;
    cron8am() {
        console.log('=================================================');
        console.log('=================================================');
        console.log('=============   10:00 AM CRON JOB   ==============');
        console.log(`=============    ${new Date()}     ==============`);
        console.log('=================================================');
        console.log('=================================================');
    }
    ;
    cron8pm() {
        console.log('=================================================');
        console.log('=================================================');
        console.log('=============   8:00 PM CRON JOB   ==============');
        console.log(`=============    ${new Date()}     ==============`);
        console.log('=================================================');
        console.log('=================================================');
    }
    ;
};
exports.CronService = CronService;
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_30_SECONDS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CronService.prototype, "cron30seconds", null);
__decorate([
    (0, schedule_1.Cron)('0 10 * * *', {
        timeZone: 'America/New_York',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CronService.prototype, "cron8am", null);
__decorate([
    (0, schedule_1.Cron)('0 20 * * *', {
        timeZone: 'America/New_York',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CronService.prototype, "cron8pm", null);
exports.CronService = CronService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [workflow_service_1.WorkflowService])
], CronService);
//# sourceMappingURL=cron.service.js.map