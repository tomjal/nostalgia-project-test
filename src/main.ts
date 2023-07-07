import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  // enable shutdown hooks explicitly.
  app.enableShutdownHooks();
  app.enableCors();

  const swaggerConfig = new DocumentBuilder()
  .setTitle('Games Library API')
  .setDescription('Games Library API')
  .setVersion('1.0')
  .addTag('games')
  .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
