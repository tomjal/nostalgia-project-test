import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import {
    GameController, GameExternalMonitor, GameFramerate,
    GameGraphics, GamePlatformType, GameType
} from 'src/shared/enums';

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
    @Prop()
    graphics?: GameGraphics;
    @Prop()
    framerate?: GameFramerate;
    @Prop()
    controller?: GameController;
    @Prop()
    externalMonitor?: GameExternalMonitor;
    @Prop()
    steamDbLink?: string;
}

export const GameDocumentSchema = SchemaFactory.createForClass(Game);
