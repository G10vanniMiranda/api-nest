import { IsNotEmpty } from "class-validator";

export class CreateClienteDto {

    @IsNotEmpty({ message: 'O campo nome é obrigatório' })
    nome: string;

    @IsNotEmpty({ message: 'O campo telefone é obrigatório' })
    telefone: string;

    @IsNotEmpty({ message: 'O campo email é obrigatório' })
    email: string;

    @IsNotEmpty({ message: 'O campo senha é obrigatório' })
    senha: string;
}
