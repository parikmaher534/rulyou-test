import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional } from 'class-validator';

import { IsNumberTranslated, MaxLengthTranslated } from '@/src/decorators/validators.lang.decorator';

export class UpdateUserParams {
  @ApiProperty({ type: 'number' })
  @Type(() => Number)
  @IsNumberTranslated('ID пользователя должен быть числом')
  id: string;
}

export class UpdateUserRequest {
  @ApiProperty({ required: false })
  @IsOptional()
  @MaxLengthTranslated(255, 'Полное имя пользователя')
  full_name: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @MaxLengthTranslated(255, 'Роль пользователя')
  role: string;

  @ApiProperty({ required: false })
  @IsOptional()
  efficiency: number;
}
