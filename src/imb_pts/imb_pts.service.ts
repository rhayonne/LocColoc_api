import { Injectable } from '@nestjs/common';
import { CreateImbPtDto } from './dto/create-imb_pt.dto';
import { UpdateImbPtDto } from './dto/update-imb_pt.dto';

@Injectable()
export class ImbPtsService {
  create(createImbPtDto: CreateImbPtDto) {
    return 'This action adds a new imbPt';
  }

  findAll() {
    return `This action returns all imbPts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} imbPt`;
  }

  update(id: number, updateImbPtDto: UpdateImbPtDto) {
    return `This action updates a #${id} imbPt`;
  }

  remove(id: number) {
    return `This action removes a #${id} imbPt`;
  }
}
