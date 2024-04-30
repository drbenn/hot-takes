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
exports.ChatGptService = void 0;
const common_1 = require("@nestjs/common");
const openai_1 = require("openai");
const db_service_1 = require("../db/db.service");
let ChatGptService = class ChatGptService {
    constructor(dbService) {
        this.dbService = dbService;
    }
    async generateAiPost(contributor) {
        var _a, _b;
        const openai = new openai_1.OpenAI({ apiKey: process.env.OPENAI_API_KEY });
        const prompt = `A current news headline is: ${(_a = contributor.newsStory) === null || _a === void 0 ? void 0 : _a.title}.
      The headline is accompanied with some more detail of: ${(_b = contributor.newsStory) === null || _b === void 0 ? void 0 : _b.contentSnippet}.
      ${contributor.gpt_prompt}.
      Return the quote in JSON format with a key of \'post\'`;
        const completion = await openai.chat.completions.create({
            messages: [
                { role: "assistant", content: prompt },
            ],
            model: "gpt-3.5-turbo-0125",
            response_format: { type: "json_object" },
        });
        const response = completion.choices[0].message.content;
        const json = JSON.parse(response);
        console.log(json);
        const post = json["post"];
        const escapedPost = post.replace(/['"`]/g, '\\$&');
        this.dbService.insertPost(contributor, escapedPost);
    }
    ;
};
exports.ChatGptService = ChatGptService;
exports.ChatGptService = ChatGptService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [db_service_1.DbService])
], ChatGptService);
//# sourceMappingURL=chat-gpt.service.js.map