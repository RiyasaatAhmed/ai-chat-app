import { OpenAI } from 'openai';
import { ChatCompletionMessageParam } from 'openai/resources';
import { Injectable } from '@nestjs/common';
import { SendMessageDto } from './dto/send-message.request';

@Injectable()
export class OpenAiService {
  public openAi: OpenAI;
  constructor() {
    this.openAi = new OpenAI({
      apiKey: process.env.OPEN_AI_API_KEY,
    });
  }

  async sendMessage(messages: SendMessageDto[]) {
    try {
      return await this.openAi.chat.completions.create({
        messages: messages as ChatCompletionMessageParam[],
        model: 'gpt-3.5-turbo',
      });
    } catch (error) {
      return error;
    }
  }
}
