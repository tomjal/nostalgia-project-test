import { Controller, Get, UseFilters, UseGuards } from '@nestjs/common';
import { HttpExceptionFilter } from 'src/shared/filters';
import { MaintenanceService } from './maintenance.service';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@Controller('maintenance')
@ApiTags('maintenance')
@UseFilters(new HttpExceptionFilter())
export class MaintenanceController {
    constructor(private maintenanceService: MaintenanceService) { }

    @UseGuards(AuthGuard('jwt'))
    @Get("/dropdb")
    async dropDB() {
        this.maintenanceService.dropDB();
    }
}
