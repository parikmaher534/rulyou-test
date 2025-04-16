import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from '@/src/entities';

import * as CommonDTO from '@/src/dto';
import * as DTO from './dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  public async getUsersList(query): Promise<DTO.GetUsersListResponse> {
    try {
      const result = await this.userRepository.findBy({ ...query });

      return {
        success: true,
        result: {
          users: result,
        },
      };
    } catch (error) {
      Logger.error(error, `${UsersService.name} -> getUsersList`);
      throw new HttpException('Ошибка получения данных списка пользователей', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public async getUser({ id }: DTO.GetUserRequest): Promise<DTO.GetUserResponse> {
    try {
      const user = await this.userRepository.findOneBy({ id });

      return {
        success: true,
        result: {
          users: user ? [user] : [],
        },
      };
    } catch (error) {
      Logger.error(error, `${UsersService.name} -> getUsers`);
      throw new HttpException('Ошибка получения данных пользователя', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public async createUser(data: DTO.CreateUserRequest): Promise<DTO.CreateUserResponse> {
    try {
      const { id } = await this.userRepository.save(data);

      return {
        success: true,
        result: { id },
      };
    } catch (error) {
      Logger.error(error, `${UsersService.name} -> createUser`);

      throw new HttpException('Ошибка создания пользователя', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public async updateUser({ id }: DTO.UpdateUserParams, data: DTO.UpdateUserRequest): Promise<DTO.UpdateUserResponse> {
    try {
      /* По-хорошему нужен декоратор для проверки таких вещей */
      if (Object.keys(data).length === 0) {
        throw new HttpException('Укажите поля которые необходимо обновить.', HttpStatus.BAD_REQUEST);
      }

      const result = await this.userRepository.update({ id }, data);

      if (!result.affected) {
        throw new HttpException('Не получилось обновить пользователя.', HttpStatus.BAD_REQUEST);
      }

      const user = await this.userRepository.findOneBy({ id });

      return {
        success: true,
        result: user,
      };
    } catch (error) {
      Logger.error(error, `${UsersService.name} -> updateUser`);

      throw new HttpException('Ошибка обновления пользователя', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public async deleteUser({ id }: DTO.DeleteUserRequest): Promise<DTO.DeleteUserResponse> {
    try {
      const user = await this.userRepository.findOneBy({ id });

      if (!user) {
        throw new HttpException('Пользователь не найден', HttpStatus.NOT_FOUND);
      }

      const result = await this.userRepository.delete(id);

      if (!result.affected) {
        throw new HttpException('Пользователь не был удален', HttpStatus.BAD_REQUEST);
      }

      return {
        success: true,
        result: user,
      };
    } catch (error) {
      Logger.error(error, `${UsersService.name} -> deleteUser`);

      throw new HttpException('Ошибка удаления пользователя', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public async deleteAllUsers(): Promise<CommonDTO.SuccessStatus> {
    try {
      const result = await this.userRepository.query('DELETE FROM user;');

      if (!result.affectedRows) {
        throw new HttpException('Не удалось удалить всех пользователей', HttpStatus.BAD_REQUEST);
      }

      return { success: true };
    } catch (error) {
      Logger.error(error, `${UsersService.name} -> deleteAllUsers`);

      throw new HttpException('Ошибка удаления всех пользователей', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
