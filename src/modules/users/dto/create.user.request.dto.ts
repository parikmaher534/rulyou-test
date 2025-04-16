import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

import {
  IsNotEmptyTranslated,
  IsStringTranslated,
  MaxLengthTranslated,
  IsNumberTranslated,
} from '@/src/decorators/validators.lang.decorator';

export class CreateUserRequest {
  @ApiProperty()
  @Transform(({ value }) => value?.trim())
  @IsStringTranslated('Полное имя пользователя')
  @IsNotEmptyTranslated('Полное имя пользователя')
  @MaxLengthTranslated(255, 'Полное имя пользователя')
  full_name: string;

  @ApiProperty()
  @Transform(({ value }) => value?.trim())
  @IsStringTranslated('Роль пользователя')
  @IsNotEmptyTranslated('Роль пользователя')
  @MaxLengthTranslated(255, 'Роль пользователя')
  role: string;

  @ApiProperty()
  @IsNumberTranslated('Эффективность пользователя')
  @IsNotEmptyTranslated('Эффективность пользователя')
  efficiency: number;
}
