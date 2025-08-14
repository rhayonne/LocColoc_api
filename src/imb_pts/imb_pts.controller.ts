import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ImbPtsService } from './imb_pts.service';
import { CreateImbPtDto } from './dto/create-imb_pt.dto';
import { UpdateImbPtDto } from './dto/update-imb_pt.dto';

@Controller('imb-pts')
export class ImbPtsController {
  constructor(private readonly imbPtsService: ImbPtsService) {}

  @Post()
  create(@Body() createImbPtDto: CreateImbPtDto) {
    return this.imbPtsService.create(createImbPtDto);
  }

  @Get()
  findAll() {
    return this.imbPtsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.imbPtsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateImbPtDto: UpdateImbPtDto) {
    return this.imbPtsService.update(+id, updateImbPtDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.imbPtsService.remove(+id);
  }
}
