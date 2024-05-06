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
exports.WorkflowService = void 0;
const common_1 = require("@nestjs/common");
const nest_winston_1 = require("nest-winston");
const chat_gpt_service_1 = require("../chat-gpt/chat-gpt.service");
const db_service_1 = require("../db/db.service");
const headline_scrape_service_1 = require("../headline-scrape/headline-scrape.service");
const winston_1 = require("winston");
let WorkflowService = class WorkflowService {
    constructor(dbService, headlineService, gptService, logger) {
        this.dbService = dbService;
        this.headlineService = headlineService;
        this.gptService = gptService;
        this.logger = logger;
    }
    async aiPostWorkFlow(maxPostDelayHours) {
        const contributors = await this.dbService.getAllContributors();
        const shuffledContributors = this.shuffleContributors(contributors);
        const delayedShuffledContributors = this.addDelayForContributorPosting(shuffledContributors, maxPostDelayHours);
        let delayedText = '';
        delayedShuffledContributors.forEach((cont) => delayedText += `id: ${cont.contributor_id} | delay: ${cont.ms_post_delay}`);
        this.logger.log('info', `delayedShuffledContributors:  ${delayedText}`);
        const headlines = await this.headlineService.getLatestHeadlines();
        let headlineTitles = '';
        headlines.forEach((headline) => headlineTitles += headline.title + ',');
        this.logger.log('info', `headlines:  ${headlineTitles}`);
        const contributorsPromptData = this.assignNewsStoryToContributors(headlines, delayedShuffledContributors);
        console.log(contributorsPromptData);
        console.log(contributorsPromptData);
        let contributorsPromptDataLog = '';
        contributorsPromptData.forEach((contributor) => contributorsPromptDataLog += 'id: ' + contributor.contributor_id + ', story: ' + contributor.newsStory.title + 'delay(ms): ' + contributor.ms_post_delay + '  |  ');
        this.logger.log('info', `contributorsPromptData:  ${contributorsPromptDataLog}`);
        contributorsPromptData.forEach((contributor) => {
            setTimeout(() => {
                this.gptService.generateAiPost(contributor);
            }, contributor.ms_post_delay);
        });
    }
    shuffleContributors(contributors) {
        for (let i = contributors.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [contributors[i], contributors[j]] = [contributors[j], contributors[i]];
        }
        ;
        return contributors;
    }
    ;
    addDelayForContributorPosting(contributors, maxPostDelayHours) {
        const maxPostCycleDelay = maxPostDelayHours * 3600000;
        const delayedContributors = contributors.map((contributor) => {
            const delay = Math.floor(maxPostCycleDelay * Math.random());
            return {
                contributor_id: contributor.contributor_id,
                gpt_prompt: contributor.gpt_prompt,
                ms_post_delay: delay
            };
        });
        return delayedContributors;
    }
    ;
    assignNewsStoryToContributors(headlines, delayedShuffledContributors) {
        const assignedHeadlines = delayedShuffledContributors
            .map((contributor) => {
            return Object.assign(Object.assign({}, contributor), { newsStory: headlines[Math.floor(Math.random() * headlines.length)] });
        });
        return assignedHeadlines;
    }
    ;
};
exports.WorkflowService = WorkflowService;
exports.WorkflowService = WorkflowService = __decorate([
    (0, common_1.Injectable)(),
    __param(3, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [db_service_1.DbService,
        headline_scrape_service_1.HeadlineScrapeService,
        chat_gpt_service_1.ChatGptService,
        winston_1.Logger])
], WorkflowService);
//# sourceMappingURL=workflow.service.js.map