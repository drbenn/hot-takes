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
exports.DbService = void 0;
const common_1 = require("@nestjs/common");
const nest_mysql_1 = require("nest-mysql");
let DbService = class DbService {
    constructor(connection) {
        this.connection = connection;
    }
    async insertPost({ contributor_id, headline, content_snippet, link, post }) {
        console.log(contributor_id, headline, content_snippet, link, post);
        const sqlQuery = `INSERT INTO ai_posts (contributor_id, headline, content_snippet, link, post) 
      VALUES (
        \'${contributor_id}\',
        \'${headline}\',
        \'${content_snippet}\',
        \'${link}\',
        \'${post}\'
      )`;
        const response = await this.connection.query(sqlQuery);
        const results = Object.assign([{}], response[0]);
        if (results.serverStatus === 2) {
            console.log(`AI Post Insert Successful for:\n
      contributor ID: ${contributor_id}, \n
      headline: ${headline}, \n
      post: ${post}  \n
      `);
        }
        else {
            console.error(`Error Inserting AI Post! Insert failed for post details:\n
      contributor ID: ${contributor_id}, \n
      headline: ${headline}, \n
      post: ${post}  \n
      `);
            throw new Error(`Error Inserting AI Post! Insert failed for post details:\n
        contributor ID: ${contributor_id}, \n
        headline: ${headline}, \n
        post: ${post}  \n
      `);
        }
        ;
    }
    ;
    async getAllContributors() {
        const sqlQuery = `SELECT id, gpt_prompt FROM contributors`;
        const response = await this.connection.query(sqlQuery);
        const result = Object.assign([{}], response[0])
            .map((contributor) => {
            return {
                contributor_id: contributor.id,
                gpt_prompt: contributor.gpt_prompt
            };
        });
        return result;
    }
    ;
};
exports.DbService = DbService;
exports.DbService = DbService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nest_mysql_1.InjectClient)()),
    __metadata("design:paramtypes", [Object])
], DbService);
//# sourceMappingURL=db.service.js.map