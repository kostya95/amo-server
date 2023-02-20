import { Body, Controller, Post } from '@nestjs/common';
import { AmoService } from 'src/amo/amo.service';
import { CreateCompanyDTO } from './dto/companies.dto';

@Controller('companies')
export class CompaniesController {
    constructor (private amoService: AmoService) {}
    @Post()
    async create(@Body() company: CreateCompanyDTO) {
        const id = await this.amoService.store('companies', company)
        return id
    }
}
