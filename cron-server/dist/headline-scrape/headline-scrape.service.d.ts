import { NewsStory } from 'src/app.models';
export declare class HeadlineScrapeService {
    getLatestHeadlines(): Promise<NewsStory[]>;
}
