import { Query, Param, Get, Body, Controller, Post, Patch, Delete, UseFilters } from '@nestjs/common';
import { ApiOkResponse, ApiTags, ApiOperation } from '@nestjs/swagger';

import * as CommonDTO from '@/src/dto';
import { HttpExceptionFilter } from '@/src/filter/http-exception.filter';

import * as DTO from './dto';
import { UsersService } from './users.service';

@Controller()
@ApiTags('Пользователи')
@UseFilters(new HttpExceptionFilter())
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('get')
  @ApiOperation({ summary: 'Получаем данные о всех пользователях' })
  @ApiOkResponse({ type: DTO.GetUsersListResponse })
  getUsersList(@Query() query: DTO.GetUsersListRequest) {
    return this.usersService.getUsersList(query);
  }

  @Get('get/:id')
  @ApiOperation({ summary: 'Получаем данные о пользователе' })
  @ApiOkResponse({ type: DTO.GetUserResponse })
  getUser(@Param() params: DTO.GetUserRequest) {
    return this.usersService.getUser(params);
  }

  @Post('create')
  @ApiOperation({ summary: 'Создаём нового пользователя' })
  @ApiOkResponse({ type: DTO.CreateUserResponse })
  createUser(@Body() data: DTO.CreateUserRequest) {
    return this.usersService.createUser(data);
  }

  @Patch('update/:id')
  @ApiOperation({ summary: 'Обновляем данные пользователя' })
  @ApiOkResponse({ type: DTO.UpdateUserResponse })
  updateUser(@Param() params: DTO.UpdateUserParams, @Body() data: DTO.UpdateUserRequest) {
    return this.usersService.updateUser(params, data);
  }

  @Delete('delete/:id')
  @ApiOperation({ summary: 'Удаляем пользователя' })
  @ApiOkResponse({ type: DTO.DeleteUserResponse })
  deleteUser(@Param() params: DTO.DeleteUserRequest) {
    return this.usersService.deleteUser(params);
  }

  @Delete('delete')
  @ApiOperation({ summary: 'Удаляем пользователя' })
  @ApiOkResponse({ type: CommonDTO.SuccessStatus })
  deleteAllUsers() {
    return this.usersService.deleteAllUsers();
  }
}
