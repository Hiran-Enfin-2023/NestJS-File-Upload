import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useStaticAssets(path.join(__dirname , "../uploads"))
  app.use(express.json({ limit: '50mb' })); // Increase the limit if needed
  app.use(express.urlencoded({ extended: true, limit: '50mb' }));
  await app.listen(3000).then(() => {
    console.log('File upload service is running in PORT 3000');
  });
}
bootstrap();
