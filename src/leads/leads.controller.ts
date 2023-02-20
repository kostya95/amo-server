import { Controller, Post, Body } from '@nestjs/common';
import { CreateLeadDto } from './dto/lead.dto';
import { AmoService } from 'src/amo/amo.service';
@Controller('leads')
export class LeadsController {
    constructor(private leadServie: AmoService){}
    @Post()
    async create(@Body() createLead: CreateLeadDto) {
        const id = await this.leadServie.store('leads',createLead)
        return id
    }
}
