import { Test, TestingModule } from '@nestjs/testing';
import { ImbController } from './imb.controller';
import { ImbService } from './imb.service';

describe('ImbController', () => {
  let controller: ImbController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImbController],
      providers: [ImbService],
    }).compile();

    controller = module.get<ImbController>(ImbController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
