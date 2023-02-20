import { Module } from '@nestjs/common';
import { AmoService } from 'src/amo/amo.service';
import { ContactsController } from './contacts.controller';

@Module({
  providers: [AmoService],
  controllers: [ContactsController]
})
export class ContactsModule {}
