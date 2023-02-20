import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { initApi } from './connection';
import {ValidationPipe} from "@nestjs/common"
import { BadRequestException } from '@nestjs/common';


async function bootstrap() {
  await initApi()
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    exceptionFactory: (errors) =>new BadRequestException(errors)}))
  app.enableCors({
    origin: "*"
  })
  await app.listen(3000);
}

bootstrap();
