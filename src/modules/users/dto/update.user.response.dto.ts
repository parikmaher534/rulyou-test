import { ApiProperty } from '@nestjs/swagger';

import { SuccessResponse } from '@/src/dto';

class UpdateResponseResult {
  @ApiProperty({ type: 'string' })
  id: string;

  @ApiProperty()
  full_name: string;

  @ApiProperty()
  role: string;

  @ApiProperty()
  efficiency: number;
}

export class UpdateUserResponse extends SuccessResponse {
  @ApiProperty({ type: UpdateResponseResult })
  result: UpdateResponseResult;
}
