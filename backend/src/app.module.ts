import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { OpenAiModule } from './open-ai/open-ai.module';

@Module({
  imports: [ConfigModule.forRoot(), OpenAiModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
