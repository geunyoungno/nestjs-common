import { IsISO8601Datetime } from '#common/decorator/is-iso-8601-datetime.decorator';
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsOptional, IsString } from 'class-validator';

@Expose()
export class CreateUserBodyDto {
  @ApiProperty({
    description: `사용자 성명`,
    type: 'string',
    default: `사용자 성명`,
  })
  @IsString()
  fullName!: string;

  @ApiProperty({
    description: `사용자 생성시점`,
    format: 'date-time',
    default: new Date(),
  })
  @IsISO8601Datetime()
  @IsOptional()
  createdAt?: Date;
}
