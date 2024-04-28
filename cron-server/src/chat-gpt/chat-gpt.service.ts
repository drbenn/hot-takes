import { Injectable } from '@nestjs/common';
import { OpenAI } from 'openai'; 

@Injectable()
export class ChatGptService {
  constructor() {}
  
  async generateAiPost() {
    // const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    // const prompt: string = 'A current news headline is \'A game of Jenga\': Inside the perilous Baltimore bridge clean-up\’. Write a snarky tweet with 280 characters or less as the character of \‘Lance Styro\’ who is closely based on the actor Owen Wilson, Lance Styro has a catch phrase of \‘Absolutely!\’ Which may or may not be used in the tweet. Return the quote in JSON format';
        // const adjustedPrompt: string = 'A current news headline is \'A game of Jenga\': Inside the perilous Baltimore bridge clean-up\’. ${contributorPrompt}. Return the quote in JSON format';
    // const completion = await openai.chat.completions.create({
    //   messages: [
    //     { role: "assistant", content: prompt },
    //   ],
    //   model: "gpt-3.5-turbo-0125",
    //   response_format: { type: "json_object" },
    // });
    // console.log(completion.choices[0].message.content);
  };
}
