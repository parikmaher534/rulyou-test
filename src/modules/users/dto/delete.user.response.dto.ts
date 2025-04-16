import { ApiProperty } from '@nestjs/swagger';

import { SuccessResponse } from '@/src/dto';

class DeleteResponseResult {
  @ApiProperty({ type: 'string' })
  id: string;

  @ApiProperty()
  full_name: string;

  @ApiProperty()
  role: string;

  @ApiProperty()
  efficiency: number;
}

export class DeleteUserResponse extends SuccessResponse {
  @ApiProperty({ type: DeleteResponseResult })
  result: DeleteResponseResult;
}
