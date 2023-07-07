import { Body, Controller, Delete, Get, Param, Post, Put, UseFilters } from '@nestjs/common';
import { HttpExceptionFilter } from './../shared/filters';
import { Game } from "./games.schema";
import { GamesService } from './games.service';
import { CreateGameDto, UpdateGameDto } from './games.dto';
import { ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags, ApiUnprocessableEntityResponse } from '@nestjs/swagger';

@Controller('games')
@ApiTags('games')
@UseFilters(new HttpExceptionFilter())
export class GamesController {
    constructor(private gamesService: GamesService) { }

    @Get()
    @ApiOkResponse({ description: 'Games retrieved successfully.' })
    async findAll(): Promise<Game[]> {
        return this.gamesService.findAll();
    }

    @Get(':id')
    @ApiOkResponse({ description: 'Game retrieved successfully.' })
    @ApiNotFoundResponse({ description: 'Game not found.' })
    async findOne(@Param('id') id: string): Promise<Game> {
        return this.gamesService.findOne(id);
    }

    @Post()
    @ApiCreatedResponse({ description: 'Game created successfully.' })
    @ApiUnprocessableEntityResponse({ description: 'Game title already exists.' })
    async create(@Body() gameDto: CreateGameDto) {
        return await this.gamesService.create(gameDto);
    }

    @Delete(':id')
    @ApiOkResponse({ description: 'Game deleted successfully.' })
    @ApiNotFoundResponse({ description: 'Game not found.' })
    async delete(@Param('id') id: string) {
        return this.gamesService.delete(id);
    }

    @Put(':id')
    @ApiOkResponse({ description: 'Game updated successfully.' })
    @ApiNotFoundResponse({ description: 'Game not found.' })
    @ApiUnprocessableEntityResponse({ description: 'Game title already exists.' })
    async update(@Param('id') id: string, @Body() gameDto: UpdateGameDto) {
        return this.gamesService.update(id, gameDto);
    }
}
