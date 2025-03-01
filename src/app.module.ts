import { Module } from '@nestjs/common';
import { DbModule } from './db/db.module';
import { ProdutoModule } from './produto/produto.module';
import { CategoriaModule } from './categoria/categoria.module';
import { ClienteModule } from './cliente/cliente.module';
import { FuncionarioModule } from './funcionario/funcionario.module';

@Module({
  imports: [DbModule, ProdutoModule, CategoriaModule, ClienteModule, FuncionarioModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
