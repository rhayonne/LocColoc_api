import { PartialType } from '@nestjs/mapped-types';
import { CreateImbDto } from './create-imb.dto';

export class UpdateImbDto extends PartialType(CreateImbDto) {}
