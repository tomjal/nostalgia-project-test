import { Body, Controller, Get, Logger, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthTokenDto } from './authTokenDto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }
    private readonly logger = new Logger(AuthService.name);

    @UseGuards(AuthGuard('local'))
    @Post('login')
    async getAccessTokens(@Request() req: Request): Promise<AuthTokenDto> {
        const tokens: AuthTokenDto = await this.authService.getAccessTokens(req.body);
        await this.authService.updateRefreshTokenInDB(
            req.body['username'], tokens.refreshToken
        );
        return tokens;
    }

    @UseGuards(AuthGuard('jwt-refresh'))
    @Get('refresh')
    refreshTokens(@Request() req: Request) {
        const username = req.body['username'];
        const refreshToken = req.body['refreshToken'];
        this.logger.log(`Token refresh initiated by ${username}`);
        return this.authService.refreshTokens(username, refreshToken);
    }

}
