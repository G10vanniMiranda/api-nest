import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { PrismaService } from 'src/db/prisma.service';
@Injectable()
export class ProdutoService {
  constructor(private readonly prismaService: PrismaService) { }


  async create(createProdutoDto: CreateProdutoDto) {
    try {
      const produto = await this.prismaService.produto.create({
        data: {
          nome: createProdutoDto.nome,
          descricao: createProdutoDto.descricao,
          preco: createProdutoDto.preco
        },
        select: { id: true, nome: true }
      })
      return produto;
    } catch (error) {
      console.log(error);
      throw new HttpException('Produto não cadastrado', HttpStatus.NOT_FOUND)
    }
  }

  async findAll() {
    const produto = await this.prismaService.produto.findMany()

    if (produto) return produto;

    throw new HttpException('Não tem registros dos produtos', HttpStatus.NOT_FOUND)
  }

  findOne(id: number) {
    return this.prismaService.produto.findUnique({
      where: { id },
    });
  }

  update(id: number, updateProdutoDto: UpdateProdutoDto) {
    return this.prismaService.produto.update({
      where: { id },
      data: updateProdutoDto,
    });
  }

  remove(id: number) {
    return this.prismaService.produto.delete({
      where: { id },
    });
  }

}
