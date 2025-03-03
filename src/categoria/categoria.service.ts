import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { PrismaService } from 'src/db/prisma.service';

@Injectable()
export class CategoriaService {
  constructor(private prisma: PrismaService) { }

  async create(createCategoriaDto: CreateCategoriaDto) {
    try {
      const categoria = await this.prisma.categoria.create({
        data: {
          nome: createCategoriaDto.nome,
          status: createCategoriaDto.status
        },
        select: { id: true, nome: true }
      })
      return categoria;
    } catch (error) {
      console.log(error)
      throw new HttpException('Categoria nao cadastrada', HttpStatus.NOT_FOUND)
    }
  }

  async findAll() {
    const categoria = await this.prisma.categoria.findMany();

    if (categoria) return categoria;

    throw new HttpException('Nao tem registros das categorias', HttpStatus.NOT_FOUND)
  }

  async findOne(id: number) {
    const categoria = await this.prisma.categoria.findUnique({
      where: { id: id },
      select: { id: true, nome: true }
    })

    if (categoria) return categoria;

    throw new HttpException('Categoria nao encontrada', HttpStatus.NOT_FOUND)
  }

  async update(id: number, updateCategoriaDto: UpdateCategoriaDto) {
    try {
      const categoria = await this.prisma.categoria.findUnique({
        where: { id: id },
      })

      if (!categoria) {
        throw new HttpException('Categoria nao encontrada', HttpStatus.NOT_FOUND)
      }

      const updateCategoria = await this.prisma.categoria.update({
        where: { id: categoria.id },
        data: {
          nome: updateCategoriaDto.nome ? updateCategoriaDto.nome : categoria.nome,
          status: updateCategoriaDto.status ? updateCategoriaDto.status : categoria.status
        },
        select: { id: true, nome: true }
      })

      return categoria;

    } catch (error) {
      console.log(error)
      throw new HttpException('Categoria nao atualizada', HttpStatus.NOT_FOUND)
    }
  }

  async remove(id: number) {
    try {
      const categoria = await this.prisma.categoria.findFirst({
        where: { id: id },
      })

      if (!categoria) {
        throw new HttpException('Categoria nao encontrada', HttpStatus.NOT_FOUND)
      }

      await this.prisma.categoria.delete({
        where: { id: categoria.id },
      })
    } catch (error) {
      console.log(error)
      throw new HttpException('Categoria nao deletada', HttpStatus.NOT_FOUND)
    }
  }
}
