import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Query } from '@nestjs/common';
import { ApiQuery, ApiResponse } from '@nestjs/swagger';
import { Sig } from './sig.interface';
import { SigProvider } from './sig.provider';

@Controller('sig')
export class SigController {
    constructor(private sigProvider: SigProvider){}

    @Get()
    @HttpCode(200)
    @ApiResponse({ status: 200, type: Sig, isArray: true, description: 'Array of sigs'})
    @ApiQuery({name: 'types', isArray: true, description: 'Array of types should be return'})
    getAll(@Query() query): Sig[] {
        return this.sigProvider.getVisits(query.types);
    }

    @Get(':id')
    @HttpCode(200)
    @ApiResponse({ status: 200, type: Sig, description: 'Get one sig' })
    getOne(@Param() params): Sig {
        return this.sigProvider.getVisit(params.id);
    }

    @Post()
    @HttpCode(201)
    @ApiResponse({ status: 201, type: Sig, description: 'Create sig' })
    createSig(@Body() sig: Sig): Sig {     
        return this.sigProvider.createSig(sig);
    }

    @Delete(':id')
    @HttpCode(200)
    delete(@Param() params): Sig[] {
        return this.sigProvider.delete(params.id);
    }

    @Put('/:id')
    @HttpCode(200)
    @ApiResponse({ status: 200, type: Sig, description: 'Update sig' })
    updateTOne(@Param() params, @Body() payload: Sig) {
        return this.sigProvider.updateTour(params.id, payload);
    }
}
