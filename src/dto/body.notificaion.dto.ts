import { IsNotEmpty, IsString, IsUUID, Length } from 'class-validator';

export class BodyNotificationDto {
  @IsNotEmpty()
  @Length(5, 240)
  content: string;
  
  @IsNotEmpty()
  category: string;

  @IsUUID()
  recipientId: string;
}
