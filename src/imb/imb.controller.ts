import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ImbService } from './imb.service';
import { CreateImbDto } from './dto/create-imb.dto';
import { UpdateImbDto } from './dto/update-imb.dto';

@Controller('imb')
export class ImbController {
  constructor(private readonly imbService: ImbService) {}

  @Post()
  create(@Body() createImbDto: CreateImbDto) {
    return this.imbService.create(createImbDto);
  }

  @Get()
  findAll() {
    return this.imbService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.imbService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateImbDto: UpdateImbDto) {
    return this.imbService.update(+id, updateImbDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.imbService.remove(+id);
  }
}
