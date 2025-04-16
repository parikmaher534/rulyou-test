import { ApiProperty } from '@nestjs/swagger';

export class SuccessStatus {
  @ApiProperty()
  success: boolean;
}
