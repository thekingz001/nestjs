import { ApiPropertyOptional } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiPropertyOptional({
    type: String,
    example: 'test',
  })
  username: string;
  @ApiPropertyOptional({
    type: String,
    example: 'test',
  })
  password: string;
}
