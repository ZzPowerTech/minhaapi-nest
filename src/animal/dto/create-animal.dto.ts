import { IsNumber, IsString } from 'class-validator'
export class CreateAnimalDto {
    @IsString()
    nome: string;

    @IsNumber()
    idade: number;

    @IsString()
    sexo: string;

    @IsString()
    raca: string;

    @IsNumber()
    porte: number;

    @IsString()
    temperamento: string;

    @IsString()
    historico_saude: string[];

    @IsString()
    necessidades_especiais: string[]; 
}
