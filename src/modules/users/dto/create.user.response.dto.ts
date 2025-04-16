import { ApiProperty } from '@nestjs/swagger';

import { SuccessResponse } from '@/src/dto';

class ResponseResult {
  @ApiProperty({ type: 'string' })
  id: string;
}

export class CreateUserResponse extends SuccessResponse {
  @ApiProperty({ type: ResponseResult })
  result: ResponseResult;
}
