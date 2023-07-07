import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Injectable()
export class MaintenanceService {
    @InjectConnection() private readonly connection: Connection

    async dropDB() {
        const collections = await this.connection.db.collections();

        for (let collection of collections) {
            await collection.deleteMany({})
        }
    }
}
