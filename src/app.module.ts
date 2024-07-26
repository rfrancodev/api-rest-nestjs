import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { PrismaModule } from './database/prisma.module';

@Module({
  imports: [CarsModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
