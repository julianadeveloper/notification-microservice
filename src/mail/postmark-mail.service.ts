import { MailService } from "./mail.service";

export class PostMark implements MailService {
  sendEmail(): string {
    return 'Welcome To PostMark Mail - Class implemented MailService, return String';
  }
}
