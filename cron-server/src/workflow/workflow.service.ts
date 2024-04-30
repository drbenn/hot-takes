import { Injectable } from '@nestjs/common';
import { ContributorForPrompting, NewsStory } from 'src/app.models';
import { ChatGptService } from 'src/chat-gpt/chat-gpt.service';
import { DbService } from 'src/db/db.service';
import { HeadlineScrapeService } from 'src/headline-scrape/headline-scrape.service';

@Injectable()
export class WorkflowService {
  private maxPostDelayHours: number = 4; // Number of hours the posting cycle should conclude in 

  constructor(
    private dbService: DbService,
    private headlineService: HeadlineScrapeService,
    private gptService: ChatGptService
  ) {}
  async workflowActive() {
    console.log('WorkFlow Touched!');
    this.aiPostWorkFlow();
  };

  async aiPostWorkFlow() {
    // 1. Get listing of contributors from db
    const contributors: ContributorForPrompting[] = await this.dbService.getAllContributors();
    // contributors.pop();
    // contributors.pop();
    // console.log(contributors);

    // 2. Shuffle contributors for randomized posting order
    const shuffledContributors: ContributorForPrompting[] = this.shuffleContributors(contributors);
    // console.log(shuffledContributors);

    // 3. Generate a post delay for each and between each contributor
    const delayedShuffledContributors: ContributorForPrompting[] = this.addDelayForContributorPosting(shuffledContributors);
    // console.log(delayedShuffledContributors);

    // 4. Get listing of current news headlines from RSS feed
    const headlines: NewsStory[] = await this.headlineService.getLatestHeadlines();
    // console.log(headlines);
    
    // 5. Assign news headline to each contributor
    const contributorsPromptData: ContributorForPrompting[] = this.assignNewsStoryToContributors(headlines, delayedShuffledContributors);
    // console.log(contributorsPromptData);
    
    // 6. Iterate through contributors, for each contributor
      // a. submit appropriate prompt to chatgpt
      // b. with successful response from chatgpt insert new post into table ai_posts
      contributorsPromptData.forEach((contributor: ContributorForPrompting) => {
      // console.log('iterating based on delay...');
      
      // timeouts run concurrently, not in sequence, so no need to divide const maxPostDelayHours by # of contributors
      // also cannot await within the timeout, so calling db insert from within gptService after async quote is received.
      setTimeout(() => {
        // console.log(contributor);
        // transmit and await response from chatgpt
        // insert gpt response into db
        this.gptService.generateAiPost(contributor);      
      }, contributor.ms_post_delay )
    });
  }

  /**
   * Shuffle contributors to randomize posting order to make posting less robotic, more organic.
   * 
   * @param contributors an array of contributors from the database with limited properties 'id' and 'gpt_prompt'.
   * @returns shuffled contributors as ContributorForPrompting[].
   */
  private shuffleContributors(contributors: ContributorForPrompting[]): ContributorForPrompting[] {
    // Loop over the array starting from the last element
    for (let i = contributors.length - 1; i > 0; i--) {
      // Pick a random index from 0 to i
      const j = Math.floor(Math.random() * (i + 1));
      // Swap the elements at indices i and j
      [contributors[i], contributors[j]] = [contributors[j], contributors[i]];
    };
    return contributors;
  };

  /**
   * Add delay to each contributor to make posting less robotic, more organic allowing each to post within
   * the prescribed const maxPostDelayHours indicated at top.
   * 
   * IMPORTANT: Timeouts run concurrently, not in sequence, so no need to divide const maxPostDelayHours by # of contributors.
   * 
   * @param contributors an array of shuffled contributors 'id' and 'gpt_prompt'.
   * @returns shuffled contributors as ContributorForPrompting[] now also including the optional property of 'ms_post_delay'.
   */
  private addDelayForContributorPosting(contributors: ContributorForPrompting[]): ContributorForPrompting[] {
    const maxPostCycleDelay: number = this.maxPostDelayHours * 3600000; // X hours in ms, 1min = 60000ms, in ms 1hr = 3600000ms
    const delayedContributors: ContributorForPrompting[] = contributors.map((contributor: ContributorForPrompting) => {
      const delay: number = Math.floor(maxPostCycleDelay * Math.random());
      return {
        contributor_id: contributor.contributor_id,
        gpt_prompt: contributor.gpt_prompt,
        ms_post_delay: delay
      };
    })
    return delayedContributors;
  };


  /**
   * Assign random news headline to each contributor for use in gpt prompt.
   * 
   * @param headlines an array of headlines sourced by rss from headling service.
   * @param delayedShuffledContributors an array of shuffled contributors.
   * @returns 
   */
  private assignNewsStoryToContributors(headlines: NewsStory[], delayedShuffledContributors: ContributorForPrompting[]): ContributorForPrompting[] {
    const assignedHeadlines: ContributorForPrompting[] = delayedShuffledContributors
    .map((contributor: ContributorForPrompting) => {
      return {
        ...contributor,
        newsStory: headlines[Math.floor(Math.random() * headlines.length)]
      };
    })
    return assignedHeadlines;
  };


}
