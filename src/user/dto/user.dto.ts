import { type IUserDto } from '#nestjs-common/user/dto/user.dto.type';
import { ApiProperty } from '@nestjs/swagger';
import { IsISO8601, IsOptional, IsString, IsUUID } from 'class-validator';

export class UserDto implements IUserDto {
  @ApiProperty()
  @IsUUID(4)
  uuid: string;

  @ApiProperty()
  @IsString()
  fullName: string;

  @ApiProperty({
    required: false,
  })
  @IsISO8601()
  @IsOptional()
  createdAt?: Date;

  constructor(args: (typeof UserDto)[keyof typeof UserDto]) {
    this.uuid = args.uuid;
    this.fullName = args.fullName;
    this.createdAt = 'createdAt' in args && args.createdAt != null ? new Date(args.createdAt) : undefined;
  }
}
