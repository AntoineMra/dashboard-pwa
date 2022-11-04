import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, Min, MinLength } from "class-validator";

export interface User {
    email: string;
    username: string;
    id: string;
    role: string
    password?: string;
}

export class UserDto {
    @IsNotEmpty()
    @IsEmail()
    @ApiProperty()
    email: string;

    @IsNotEmpty()
    @ApiProperty()
    username: string;

    @IsNotEmpty()
    @ApiProperty()
    role: string;

    @IsNotEmpty()
    @MinLength(8)
    @ApiProperty()
    password: string;
    
    @IsNotEmpty()
    @MinLength(8)
    @ApiProperty()
    passwordConfirm: string;
}

export class LoginDto {
    @IsNotEmpty()
    @IsEmail()
    @ApiProperty()
    username: string;

    @IsNotEmpty()
    @ApiProperty()
    password: string;
}