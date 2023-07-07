import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument, User } from './users.schema';
import { UserDto } from './users.dto';

@Injectable()
export class UsersService {
    constructor(@InjectModel('user') private readonly userModel: Model<UserDocument>) { }
    async createUser(username: string, password: string): Promise<User> {
        return this.userModel.create({
            username,
            password,
        });
    }

    async findOne(query: object): Promise<User> {
        return this.userModel.findOne(query);
    }

    async findOneByUsername(username): Promise<User> {
        return this.userModel.findOne({username});
    }

    async findAll() {
        return this.userModel.find().exec();
    }

    async findAndUpdateUser(
        username: string,
        updateUserDto: any): Promise<UserDto> {
        return this.userModel.findOneAndUpdate({ username }, updateUserDto);
    }
}
