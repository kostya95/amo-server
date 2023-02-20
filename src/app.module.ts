import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LeadsModule } from './leads/leads.module';
import { ContactsModule } from './contacts/contacts.module';
import { AmoService } from './amo/amo.service';
import { CompaniesModule } from './companies/companies.module';

@Module({
  imports: [LeadsModule, ContactsModule, CompaniesModule],
  controllers: [AppController],
  providers: [AppService, AmoService],
})
export class AppModule {}
