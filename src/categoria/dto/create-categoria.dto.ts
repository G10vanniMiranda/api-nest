import { IsNotEmpty } from "class-validator"

export class CreateCategoriaDto {

    @IsNotEmpty({ message: 'O campo nome é obrigatório' })
    nome: string

    @IsNotEmpty({ message: 'O campo status é obrigatório' })
    status: string
}
