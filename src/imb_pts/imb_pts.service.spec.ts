import { Test, TestingModule } from '@nestjs/testing';
import { ImbPtsService } from './imb_pts.service';

describe('ImbPtsService', () => {
  let service: ImbPtsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImbPtsService],
    }).compile();

    service = module.get<ImbPtsService>(ImbPtsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
