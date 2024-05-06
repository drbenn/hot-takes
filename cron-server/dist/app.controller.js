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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const workflow_service_1 = require("./workflow/workflow.service");
const nest_winston_1 = require("nest-winston");
const winston_1 = require("winston");
let AppController = class AppController {
    constructor(appService, workflowService, logger) {
        this.appService = appService;
        this.workflowService = workflowService;
        this.logger = logger;
    }
    getHello() {
        return this.appService.getHello();
    }
    async getContributors() {
        return await this.appService.getContributors();
    }
    async newPosts() {
        this.logger.log('info', `xit newPosts Hit!:  ${new Date()}`);
        const maxPostDelayHours = 1 / 12;
        this.workflowService.aiPostWorkFlow(maxPostDelayHours);
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
__decorate([
    (0, common_1.Get)('contributors'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getContributors", null);
__decorate([
    (0, common_1.Get)('xit'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "newPosts", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __param(2, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [app_service_1.AppService,
        workflow_service_1.WorkflowService,
        winston_1.Logger])
], AppController);
//# sourceMappingURL=app.controller.js.map