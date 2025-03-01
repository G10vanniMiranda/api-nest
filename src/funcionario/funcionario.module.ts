import { Module } from '@nestjs/common';
import { FuncionarioService } from './funcionario.service';
import { FuncionarioController } from './funcionario.controller';
import { DbModule } from 'src/db/db.module';

@Module({
  imports: [DbModule],
  controllers: [FuncionarioController],
  providers: [FuncionarioService],
})
export class FuncionarioModule { }
