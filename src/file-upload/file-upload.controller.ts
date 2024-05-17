// file-upload.controller.ts
import {
  Controller,
  Post,
  UploadedFiles,
  UseInterceptors,
  Body,
} from '@nestjs/common';
import { FileUploadService } from './file-upload.service';
import { FilesInterceptor } from '@nestjs/platform-express';

@Controller('file-upload')
export class FileUploadController {
  constructor(private readonly fileUploadService: FileUploadService) {}

  @Post('upload')
  @UseInterceptors(FilesInterceptor('files'))
  uploadFiles(
    @UploadedFiles() files: Express.Multer.File[],
    @Body() body: string,
  ) {
    console.log('Uploaded Files:', files);
    console.log('Additional Information:', body);

    return { message: 'Files uploaded successfully' };
  }
}
