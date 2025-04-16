import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

import { MaxLengthTranslated } from '@/src/decorators/validators.lang.decorator';

export class GetUsersListRequest {
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
  efficiency: string;
}
