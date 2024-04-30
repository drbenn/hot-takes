import { Injectable } from '@nestjs/common';
import { Connection, QueryResult } from 'mysql2';
import { Query } from 'mysql2/typings/mysql/lib/protocol/sequences/Query';
import { InjectClient } from 'nest-mysql';
import { ContributorForPrompting } from 'src/app.models';

@Injectable()
export class DbService {

  constructor(
    @InjectClient() private readonly connection: Connection
  ) {}

  async insertPost(contributor: ContributorForPrompting, post: string): Promise<any> {
    
    const sqlQuery: string = `INSERT INTO ai_posts (contributor_id, headline, content_snippet, link, post) 
      VALUES (
        \'${contributor.contributor_id}\',
        \'${contributor.newsStory.title}\',
        \'${contributor.newsStory.contentSnippet}\',
        \'${contributor.newsStory.link}\',
        \'${post}\'
      )`;
    const response = await this.connection.query(sqlQuery);
    const results = Object.assign([{}], response[0]);
  
    if (results.serverStatus === 2) {
      console.log(`AI Post Insert Successful for:\n
      contributor ID: ${contributor.contributor_id}, \n
      headline: ${contributor.newsStory.title}, \n
      post: ${post}  \n
      `)
    } else {
      console.error(`Error Inserting AI Post! Insert failed for post details:\n
      contributor ID: ${contributor.contributor_id}, \n
      headline: ${contributor.newsStory.title}, \n
      post: ${post}  \n
      `)
      throw new Error(`Error Inserting AI Post! Insert failed for post details:\n
        contributor ID: ${contributor.contributor_id}, \n
        headline: ${contributor.newsStory.title}, \n
        post: ${post}  \n
      `) ;
    };
  };

  async getAllContributors(): Promise<ContributorForPrompting[]> {
    const sqlQuery: string = `SELECT id, gpt_prompt FROM contributors`;
    const response: Query = await this.connection.query(sqlQuery);
    const result: ContributorForPrompting[] = Object.assign([{}], response[0])
      .map((contributor: {id: number, gpt_prompt: string}) => {
        return {
          contributor_id: contributor.id,
          gpt_prompt: contributor.gpt_prompt
        };
      });
    return result;
  };

}
