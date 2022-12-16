import { Injectable } from "@nestjs/common";
import { MailService } from "./mail.service";

@Injectable()
export class SMTPMailService implements MailService {
  sendEmail(): string {
    return 'Welcome To SMTPMail Service - Class implemented MailService, return String';
  }
}
