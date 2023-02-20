import { Module } from '@nestjs/common';
import { AmoService } from 'src/amo/amo.service';
import { LeadsController } from './leads.controller';

@Module({
  providers: [AmoService],
  controllers: [LeadsController]
})
export class LeadsModule {}
