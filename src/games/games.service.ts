import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Game, GameDocument } from './games.schema';
import { BaseGameDto } from './games.dto';

@Injectable()
export class GamesService {
  @InjectModel(Game.name) private readonly gameDocModel: Model<GameDocument>;
  private readonly logger = new Logger(GamesService.name);

  async findAll(): Promise<Game[]> {
    return await this.gameDocModel.find().exec();
  }

  async findOne(id: string): Promise<Game> {

    const existingGame = await this.gameDocModel.findById(id).exec();
    if (!existingGame) {
      throw new NotFoundException('Game not found.');
    }
    return existingGame;
  }

  async create(createDto: BaseGameDto): Promise<Game> {
    return new this.gameDocModel(createDto).save();
  }

  async delete(id: string): Promise<Game> {
    const deletedGame = await this.gameDocModel.findByIdAndDelete(id).exec();
    if (!deletedGame) {
      throw new NotFoundException('Game not found.');
    }
    return deletedGame;
  }

  public deleteAll(): void {
    //this.games = [];
  }

  async update(id: string, updateDto: BaseGameDto): Promise<Game> {
    this.logger.log(`Updating game with id: ${id}`);
    return await this.gameDocModel.findByIdAndUpdate(id, updateDto).exec();
  }
}
