import { Module } from '@nestjs/common';
import { AmoService } from 'src/amo/amo.service';
import { CompaniesController } from './companies.controller';

@Module({
  providers: [AmoService],
  controllers: [CompaniesController]
})
export class CompaniesModule {}
