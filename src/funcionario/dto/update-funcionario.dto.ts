import { CreateFuncionarioDto } from './create-funcionario.dto';

export interface UpdateFuncionarioDto extends Partial<CreateFuncionarioDto> {
    id: number
}
