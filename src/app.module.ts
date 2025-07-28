import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ImbPtsModule } from './imb_pts/imb_pts.module';
import { ImbModule } from './imb/imb.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule, ImbModule, ImbPtsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
