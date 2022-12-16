import { Controller, Get } from '@nestjs/common';
import { SMTPMailService } from './mail/smtp-mail.service';

@Controller('app')
export class AppController {
  constructor(
    private readonly smtpService: SMTPMailService,
  ) {}

  @Get()
  GetHello(): string {
    return this.smtpService.sendEmail();
  }
}
