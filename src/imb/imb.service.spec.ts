import { Test, TestingModule } from '@nestjs/testing';
import { ImbService } from './imb.service';

describe('ImbService', () => {
  let service: ImbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImbService],
    }).compile();

    service = module.get<ImbService>(ImbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
