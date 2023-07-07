import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { GamePlatformType, GameType } from 'src/shared/enums';

export type GameDocument = HydratedDocument<Game>;

@Schema()
export class Game {
    @Prop({ required: true })
    title: string;
    @Prop()
    year?: number;
    @Prop()
    picturesLinks?: Array<string>;
    @Prop()
    description?: string;
    @Prop()
    genre?: GameType;
    @Prop()
    platform?: GamePlatformType;
}

export const GameDocumentSchema = SchemaFactory.createForClass(Game);
