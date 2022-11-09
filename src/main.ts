import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
  .setTitle('App ByKanSaz')
  .setDescription('My App API documentation ByKanSaz')
  .setVersion('Alpha')
  .addBearerAuth(undefined, 'defaultBearerAuth')
  .build()
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('api', app, document, {
  customSiteTitle: 'My App API documentation ByKanSaz',
  })
  await app.listen(5555);
}
bootstrap();
