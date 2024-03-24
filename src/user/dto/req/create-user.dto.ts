import { type ICreateUserBodyDto } from '#nestjs-common/user/dto/req/create-user.dto.type';
import { UserDto, UserPasswordDto } from '#nestjs-common/user/dto/res/user.dto';
import { IntersectionType, PickType } from '@nestjs/swagger';

export class CreateUserBodyDto
  extends IntersectionType(PickType(UserDto, ['fullName', 'email'] as const), UserPasswordDto)
  implements ICreateUserBodyDto {}
