import { Injectable, Logger, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { Game, GameDocument } from './games.schema';
import { CreateGameDto, UpdateGameDto } from 'src/games/games.dto';

/*const sampleData: Game[] = [
  {
    "title": "Hopkins FBI",
    "year": 1998,
    "id": 1
  },
  {
    "title": "Tomb Raider",
    "year": 1997,
    "id": 2
  }
];*/

@Injectable()
export class GamesService {
  @InjectModel(Game.name) private readonly gameDocModel: Model<GameDocument>;
  private readonly logger = new Logger(GamesService.name);
  //private games: Array<Game> = sampleData;

  async findAll(): Promise<Game[]> {
    //return this.games;
    return await this.gameDocModel.find().exec();
  }

  async findOne(id: string): Promise<Game> {
    /*const game: Game = this.games.find(game => game.id === id);

    if (!game) {
      throw new NotFoundException('Game not found.');
    }

    return game;*/

    const existingGame = await this.gameDocModel.findById(id).exec();
    if (!existingGame) {
      throw new NotFoundException('Game not found.');
    }
    return existingGame;
  }

  async create(createDto: CreateGameDto): Promise<Game> {
    // if the title is already in use by another game
    /*const titleExists: boolean = this.games.some(
      (game) => game.title === post.title,
    );
    if (titleExists) {
      throw new UnprocessableEntityException('Game title already exists.');
    }

    // find the next id for a new game
    const maxId: number = Math.max(...this.games.map((post) => post.id), 0);
    const id: number = maxId + 1;

    const gamePost: Game = {
      ...post,
      id,
    };

    this.games.push(gamePost);*/

    return new this.gameDocModel(createDto).save();
  }

  async delete(id: string): Promise<Game> {
    /*const index: number = this.games.findIndex(post => post.id === id);

    // -1 is returned when no findIndex() match is found
    if (index === -1) {
      throw new NotFoundException('Game not found.');
    }

    this.games.splice(index, 1);*/
    const deletedGame = await this.gameDocModel.findByIdAndDelete(id).exec();
    if (!deletedGame) {
      throw new NotFoundException('Game not found.');
    }
    return deletedGame;
  }

  public deleteAll(): void {
    //this.games = [];
  }

  async update(id: string, updateDto: UpdateGameDto): Promise<Game> {
    this.logger.log(`Updating game with id: ${id}`);

    /*const index: number = this.games.findIndex((post) => post.id === id);

    // -1 is returned when no findIndex() match is found
    if (index === -1) {
      throw new NotFoundException('Post not found.');
    }

    // if the title is already in use by another game
    const titleExists: boolean = this.games.some(
      (game) => game.title === post.title && game.id !== id,
    );
    if (titleExists) {
      throw new UnprocessableEntityException('Game title already exists.');
    }

    const gamePut: Game = {
      ...post,
      id,
    };

    this.games[index] = gamePut;

    return gamePut;*/

    return await this.gameDocModel.findByIdAndUpdate(id, updateDto).exec();
  }
}
