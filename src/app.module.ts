import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { SMTPMailService } from './mail/smtp-mail.service';
import { MailService } from './mail/mail.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    SMTPMailService,
    {
      provide: MailService,
      useClass: SMTPMailService,
    },
  ],
})
export class AppModule {}