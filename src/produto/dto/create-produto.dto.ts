import { IsNotEmpty, MaxLength, MinLength } from "class-validator"

export class CreateProdutoDto {

    @MinLength(10, { message: 'O campo nome deve ter pelo menos 10 caracteres' })
    @MaxLength(50, { message: 'O campo nome deve ter máximo menos 50 caracteres' })
    @IsNotEmpty({ message: 'O campo nome é obrigatório' })
    nome: string

    @IsNotEmpty({ message: 'O campo descrição é obrigatório' })
    descricao: string

    @IsNotEmpty({ message: 'O campo preço é obrigatório' })
    preco: number
}
