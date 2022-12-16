import { Post } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { Delete } from '@nestjs/common';
import { Controller, Get } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { BodyNotificationDto } from 'src/dto/body.notificaion.dto';
import { PrismaService } from './prisma.service';

@Controller('notifications')
export class AppController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get()
  listNotifications() {
    return this.prismaService.notification.findMany();
  }

  @Post()
  async createNotification(@Body() body: BodyNotificationDto) {
    const { recipientId, content, category } = body;
    await this.prismaService.notification.create({
      data: {
        id: randomUUID(),
        content,
        category,
        recipientId,
      },
    });
  }
  @Delete()
  @Post()
  async deleteNotification() {
    await this.prismaService.notification.deleteMany();
  }
}
