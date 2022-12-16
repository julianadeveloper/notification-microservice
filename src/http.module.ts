import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma.service";

@Module({
  imports: [HttpModule],
  controllers: [],
  providers: [],
})
export class HttpModule {}
