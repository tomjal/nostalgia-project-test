import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { GamesModule } from './games/games.module';
import { UsersModule } from './users/users.module';
import { MaintenanceModule } from './maintenance/maintenance.module';
import { AuthModule } from './auth/auth.module';

function mongoAddress() {
  return process.env.CONTAINER_MONGO_NAME ||= "localhost";
}

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb://${mongoAddress()}:27017/nest`),
    GamesModule,
    UsersModule,
    MaintenanceModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
