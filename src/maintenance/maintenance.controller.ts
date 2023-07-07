import { Controller, Get, UseFilters } from '@nestjs/common';
import { HttpExceptionFilter } from 'src/shared/filters';
import { MaintenanceService } from './maintenance.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('maintenance')
@ApiTags('maintenance')
@UseFilters(new HttpExceptionFilter())
export class MaintenanceController {
    constructor(private maintenanceService: MaintenanceService) { }

    @Get("/dropdb")
    async dropDB() {
        this.maintenanceService.dropDB();
    }
}
