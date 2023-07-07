import { Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post("/signup")
    async signUp() {
        this.authService.signUp();
    }
    @Post("/signin")
    async signIn() {
        this.authService.signIn();
    }
}
