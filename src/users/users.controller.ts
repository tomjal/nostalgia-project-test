import { Body, Controller, Get, Post } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { User } from './users.schema';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Get()
    async getUsers(): Promise<User[]> {
        return this.usersService.findAll();
    }

    @Post()
    async createUser(
        @Body('username') username: string,
        @Body('password') password: string,
    ): Promise<User> {
        const saltOrRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltOrRounds);
        return await this.usersService.createUser(
            username,
            hashedPassword,
        );
    }
}
