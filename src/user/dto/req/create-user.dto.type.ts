import { type IUserDto, type IUserPasswordDto } from '#nestjs-common/user/dto/res/user.dto.type';

export interface ICreateUserBodyDto extends Pick<IUserDto, 'fullName' | 'email'>, IUserPasswordDto {}
