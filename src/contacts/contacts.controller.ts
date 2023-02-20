import { Controller, Post, Body } from '@nestjs/common';
import { CreateContactDTO } from './dto/contact.dto';
import { AmoService } from 'src/amo/amo.service';
@Controller('contacts')
export class ContactsController {
    constructor(private amoService: AmoService){}
    @Post()
    async create(@Body() createLead: CreateContactDTO) {
        const id = await this.amoService.store('contacts',createLead)
        return id
    }
}
