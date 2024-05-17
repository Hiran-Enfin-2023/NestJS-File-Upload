import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FileUploadModule } from './file-upload/file-upload.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [FileUploadModule],
})
export class AppModule {}
