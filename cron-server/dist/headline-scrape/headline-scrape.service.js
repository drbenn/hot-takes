"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeadlineScrapeService = void 0;
const common_1 = require("@nestjs/common");
const Parser = require("rss-parser");
let HeadlineScrapeService = class HeadlineScrapeService {
    async getLatestHeadlines() {
        try {
            let parser = new Parser();
            const usFeed = await parser.parseURL('https://rss.nytimes.com/services/xml/rss/nyt/US.xml');
            const worldFeed = await parser.parseURL('https://rss.nytimes.com/services/xml/rss/nyt/World.xml');
            const mostpopularFeed = await parser.parseURL('https://rss.nytimes.com/services/xml/rss/nyt/MostViewed.xml');
            const selectedFeed = mostpopularFeed;
            const newsStories = selectedFeed.items.map(item => {
                const newsStory = {
                    title: item.title,
                    contentSnippet: item.contentSnippet,
                    link: item.link,
                    pubDate: new Date(item.pubDate)
                };
                return newsStory;
            });
            return newsStories;
        }
        catch (error) {
            console.error('Error fetching or parsing RSS feed:', error);
            throw new Error(`Error fetching or parsing RSS feed: ${error}`);
        }
        ;
    }
    ;
};
exports.HeadlineScrapeService = HeadlineScrapeService;
exports.HeadlineScrapeService = HeadlineScrapeService = __decorate([
    (0, common_1.Injectable)()
], HeadlineScrapeService);
//# sourceMappingURL=headline-scrape.service.js.map