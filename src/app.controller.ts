import { Post } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { Controller, Get } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { BodyNotificationDto } from 'prisma/dto/body.notificaion.dto';
import { PrismaService } from './prisma.service';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  listNotifications() {
    return this.prisma.notification.findMany();
  }

  @Post()
  async createNotification(@Body() body: BodyNotificationDto) {
    const { recipientId, content, category } = body;
    await this.prisma.notification.create({
      data: {
        id: randomUUID(),
        content,
        category,
        recipientId,
      },
    });
  }
}
