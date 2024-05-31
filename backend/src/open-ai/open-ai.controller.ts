import { Body, Controller, Post } from '@nestjs/common';
import { CreateSendMessageRequest } from './dto/send-message.request';
import { OpenAiService } from './open-ai.service';

@Controller('open-ai')
export class OpenAiController {
  constructor(private readonly openAiService: OpenAiService) {}

  @Post('send-message')
  async sendMessage(@Body() body: CreateSendMessageRequest) {
    return this.openAiService.sendMessage(body.messages);
  }
}
