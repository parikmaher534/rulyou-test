import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

import { IsNumberTranslated } from '@/src/decorators/validators.lang.decorator';

export class DeleteUserRequest {
  @ApiProperty({ type: 'number' })
  @Type(() => Number)
  @IsNumberTranslated('ID пользователя должен быть числом')
  id: string;
}
