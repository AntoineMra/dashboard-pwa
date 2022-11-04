import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Query } from '@nestjs/common';
import { ApiQuery, ApiResponse } from '@nestjs/swagger';
import { User } from './user.interface';
import { UserProvider } from './user.provider';

@Controller('user')
export class UserController {
    constructor(private userProvider: UserProvider){}

    @Get()
    @HttpCode(200)
    @ApiResponse({ status: 200, type: User, isArray: true, description: 'Array of sigs'})
    @ApiQuery({name: 'types', isArray: true, description: 'Array of types should be return'})
    getAll(@Query() query): User[] {
        return this.userProvider.getUsers(query.types);
    }
}
