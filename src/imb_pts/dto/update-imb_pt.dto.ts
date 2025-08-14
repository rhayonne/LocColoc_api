import { PartialType } from '@nestjs/mapped-types';
import { CreateImbPtDto } from './create-imb_pt.dto';

export class UpdateImbPtDto extends PartialType(CreateImbPtDto) {}
