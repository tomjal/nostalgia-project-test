import { ForbiddenException, Injectable, Logger, NotAcceptableException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { AuthTokenDto } from './authTokenDto';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private jwtService: JwtService,
    ) { }
    private logger = new Logger(AuthService.name)

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.usersService.findOne({ username });
        if (!user) {
            throw new NotAcceptableException('Could not find the user');
        }
        const passwordValid = await bcrypt.compare(password, user.password)
        if (user && passwordValid) {
            return user
        }
        return null;
    }

    async getAccessTokens(user): Promise<AuthTokenDto> {
        const payload = { username: user.username };

        return {
            accessToken: this.jwtService.sign(payload),
            refreshToken: this.jwtService.sign(payload,
                {
                    secret: 'supersecret',
                    expiresIn: '1d'
                })
        };
    }

    async updateRefreshTokenInDB(username, refreshToken) {
        this.usersService.findAndUpdateUser(username, { refreshToken });
    }

    async refreshTokens(username: string, refreshToken: string) {
        const user = await this.usersService.findOneByUsername(username);
        if (!user || !user.refreshToken)
            throw new ForbiddenException('Access Denied');
            
        const refreshDifferences = user.refreshToken.localeCompare(refreshToken);

        if (refreshDifferences !== 0) throw new ForbiddenException('Access Denied');
        const tokens = await this.getAccessTokens({ username });
        await this.updateRefreshTokenInDB(username, tokens.refreshToken);
        return tokens;
    }

    /*storeTokenInCookie(res: ResponseType, authToken: AuthTokenDto) {
        res.cookie('access_token', authToken.accessToken, { maxAge: 1000 * 60 * 15, httpOnly: true });
        res.cookie('refresh_token', authToken.refreshToken, { maxAge: 1000 * 60 * 60 * 24 * 7, httpOnly: true });
    }*/
}