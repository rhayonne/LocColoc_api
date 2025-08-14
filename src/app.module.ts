/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ImbPtsModule } from './imb_pts/imb_pts.module';
import { ImbModule } from './imb/imb.module';

@Module({
  imports: [
    UserModule,
    ImbModule,
    MongooseModule.forRoot('process.env.MONGO_URI'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
