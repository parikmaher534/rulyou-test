import { ApiProperty } from '@nestjs/swagger';

import { SuccessResponse } from '@/src/dto';

class UserItem {
  @ApiProperty({ type: 'string' })
  id: string;

  @ApiProperty()
  full_name: string;

  @ApiProperty()
  role: string;

  @ApiProperty()
  efficiency: number;
}

class UsersList {
  @ApiProperty({ type: UserItem, isArray: true })
  users: UserItem[];
}

export class GetUserResponse extends SuccessResponse {
  @ApiProperty({ type: UsersList })
  result: UsersList;
}
