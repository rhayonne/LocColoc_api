import { Module } from '@nestjs/common';
import { ImbService } from './imb.service';
import { ImbController } from './imb.controller';

@Module({
  controllers: [ImbController],
  providers: [ImbService],
})
export class ImbModule {}
