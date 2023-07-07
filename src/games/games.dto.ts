import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsEnum, IsNumber, IsOptional, IsString, MaxLength, MinLength } from "class-validator";
import { GamePlatformType, GameType } from "src/shared/enums";

export class BaseGameDto {
    @IsString()
    @MinLength(3)
    @MaxLength(256)
    @ApiProperty()
    title: string;
    @IsNumber()
    @IsOptional()
    @ApiPropertyOptional()
    year?: number;
    @IsString({each: true})
    @IsOptional()
    @ApiPropertyOptional()
    picturesLinks?: Array<number>;
    @IsString()
    @MinLength(3)
    @MaxLength(256)
    @IsOptional()
    @ApiPropertyOptional()
    description?: string;
    @IsEnum(GameType)
    @IsOptional()
    @ApiPropertyOptional({
        enum: GameType,
    })
    genre?: GameType;
    @IsEnum(GamePlatformType)
    @IsOptional()
    @ApiPropertyOptional({
        enum: GamePlatformType,
    })
    platform?: GamePlatformType;
}

export class CreateGameDto extends BaseGameDto { }
export class UpdateGameDto extends BaseGameDto { }