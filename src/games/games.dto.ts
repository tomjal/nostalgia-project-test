import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsEnum, IsNumber, IsOptional, IsString, MaxLength, MinLength } from "class-validator";
import {
    GamePlatformType, GameType, GameGraphics,
    GameFramerate, GameController, GameExternalMonitor
} from "src/shared/enums";

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
    @IsString({ each: true })
    @IsOptional()
    @ApiPropertyOptional()
    picturesLinks?: Array<string>;
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
    @IsOptional()
    @ApiPropertyOptional({
        enum: GameGraphics,
    })
    graphics?: GameGraphics;
    @IsOptional()
    @ApiPropertyOptional({
        enum: GameFramerate,
    })
    framerate?: GameFramerate;
    @IsOptional()
    @ApiPropertyOptional({
        enum: GameController,
    })
    controller?: GameController;
    @IsOptional()
    @ApiPropertyOptional({
        enum: GameExternalMonitor,
    })
    externalMonitor?: GameExternalMonitor;
    @IsString()
    @MinLength(3)
    @MaxLength(500)
    @IsOptional()
    @ApiPropertyOptional()
    steamDbLink?: string;
}

export class CreateGameDto extends BaseGameDto { }
export class UpdateGameDto extends BaseGameDto { }