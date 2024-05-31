import { Type } from 'class-transformer';
import { IsArray, IsNotEmpty, IsString, ValidateNested } from 'class-validator';

export class CreateSendMessageRequest {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SendMessageDto)
  messages: SendMessageDto[];
}

export class SendMessageDto {
  @IsString()
  @IsNotEmpty()
  role: string;

  @IsString()
  @IsNotEmpty()
  content: string;
}
