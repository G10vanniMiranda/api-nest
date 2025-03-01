import { Injectable } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { PrismaService } from 'src/db/prisma.service';

@Injectable()
export class ClienteService {
  constructor(private prismaService: PrismaService) { }
  create(createClienteDto: CreateClienteDto) {
    return this.prismaService.cliente.create({
      data: createClienteDto,
    });
  }

  findAll() {
    return this.prismaService.cliente.findMany();
  }

  findOne(id: number) {
    return this.prismaService.cliente.findUnique({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateClienteDto: UpdateClienteDto) {
    return this.prismaService.cliente.update({
      where: {
        id: id,
      },
      data: updateClienteDto,
    });
  }

  remove(id: number) {
    return this.prismaService.cliente.delete({
      where: {
        id: id,
      },
    });
  }
}
