import { Injectable } from '@nestjs/common';
import { CreateFuncionarioDto } from './dto/create-funcionario.dto';
import { UpdateFuncionarioDto } from './dto/update-funcionario.dto';
import { PrismaService } from 'src/db/prisma.service';

@Injectable()
export class FuncionarioService {
  constructor(private readonly prismaService: PrismaService) { }
  create(createFuncionarioDto: CreateFuncionarioDto) {
    return this.prismaService.funcionario.create({
      data: createFuncionarioDto,
    });
  }

  findAll() {
    return this.prismaService.funcionario.findMany();
  }

  findOne(id: number) {
    return this.prismaService.funcionario.findUnique({
      where: { id },
    });
  }

  update(id: number, updateFuncionarioDto: UpdateFuncionarioDto) {
    return this.prismaService.funcionario.update({
      where: { id },
      data: updateFuncionarioDto,
    });
  }

  remove(id: number) {
    return this.prismaService.funcionario.delete({
      where: { id },
    });
  }
}
