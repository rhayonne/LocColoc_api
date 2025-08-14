import { Module } from '@nestjs/common';
import { ImbPtsService } from './imb_pts.service';
import { ImbPtsController } from './imb_pts.controller';

@Module({
  controllers: [ImbPtsController],
  providers: [ImbPtsService],
})
export class ImbPtsModule {}
