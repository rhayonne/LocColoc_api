import { Test, TestingModule } from '@nestjs/testing';
import { ImbPtsController } from './imb_pts.controller';
import { ImbPtsService } from './imb_pts.service';

describe('ImbPtsController', () => {
  let controller: ImbPtsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImbPtsController],
      providers: [ImbPtsService],
    }).compile();

    controller = module.get<ImbPtsController>(ImbPtsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
