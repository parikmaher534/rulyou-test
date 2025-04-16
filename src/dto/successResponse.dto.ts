import { ApiProperty } from '@nestjs/swagger';

export class SuccessResponse {
  @ApiProperty()
  success: true;

  @ApiProperty()
  result: any;
}
