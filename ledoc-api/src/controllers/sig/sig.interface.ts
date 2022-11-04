import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsDateString, IsMilitaryTime, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class Sig {
    @ApiProperty()
    name: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    range: number;

    @ApiProperty()
    communicationRange: string;

    @ApiProperty()
    message: string;

    @ApiProperty()
    long: number;

    @ApiProperty()
    lat: number;
}