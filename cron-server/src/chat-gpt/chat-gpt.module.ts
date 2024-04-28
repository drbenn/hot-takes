import { Module } from '@nestjs/common';
import { ChatGptService } from './chat-gpt.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [ChatGptService],
  exports: [ChatGptService],
})
export class ChatGptModule {



};
