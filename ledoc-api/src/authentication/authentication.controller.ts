import { Body, Controller, HttpCode, Post, Request, UseGuards } from '@nestjs/common';

import { UserService } from 'src/users/user';
import { LoginDto } from 'src/users/user.model';
import { AuthenticationService } from './authentication';

@Controller('auth')
export class AuthenticationController {

    constructor(private authService: AuthenticationService, private userService: UserService) { }

    @Post('login')
    async login(@Body() user: LoginDto) {
        return this.authService.login(user);
    }

    // @Post('signup')
    // @HttpCode(201)
    // async signup(@Body() body: UserDto) {
    //     if(body.password === body.passwordConfirm) {
    //         return this.userService.create(body);
    //     }
    //     return false;
    // }

}
