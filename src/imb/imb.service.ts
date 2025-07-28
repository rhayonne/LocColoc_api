import { Injectable } from '@nestjs/common';
import { CreateImbDto } from './dto/create-imb.dto';
import { UpdateImbDto } from './dto/update-imb.dto';

@Injectable()
export class ImbService {
  create(createImbDto: CreateImbDto) {
    return 'This action adds a new imb';
  }

  findAll() {
    return `This action returns all imb`;
  }

  findOne(id: number) {
    return `This action returns a #${id} imb`;
  }

  update(id: number, updateImbDto: UpdateImbDto) {
    return `This action updates a #${id} imb`;
  }

  remove(id: number) {
    return `This action removes a #${id} imb`;
  }
}
