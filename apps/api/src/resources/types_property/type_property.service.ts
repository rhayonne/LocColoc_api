import { Injectable } from '@nestjs/common';
import { CreateTypePropertyDto } from './dto/create-type_property.dto';
import { UpdateTypePropertyDto } from './dto/update-type_property.dto';

@Injectable()
export class TypePropertyService {
  create(createTypePropertyDto: CreateTypePropertyDto) {
    return 'This action adds a new typeProperty';
  }

  findAll() {
    return `This action returns all typeProperty`;
  }

  findOne(id: string) {
    return `This action returns a #${id} typeProperty`;
  }

  update(id: string, updateTypePropertyDto: UpdateTypePropertyDto) {
    return `This action updates a #${id} typeProperty`;
  }

  remove(id: string) {
    return `This action removes a #${id} typeProperty`;
  }
}
