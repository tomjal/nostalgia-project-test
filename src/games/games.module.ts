import { Module } from '@nestjs/common';
import { GamesService } from './games.service';
import { GamesController } from './games.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Game, GameDocumentSchema } from 'src/games/games.schema';

@Module({
  imports: [MongooseModule.forFeature([
    {
      name: Game.name,
      schema: GameDocumentSchema,
      collection: "games"
    }])],
  providers: [GamesService],
  controllers: [GamesController]
})
export class GamesModule { }
