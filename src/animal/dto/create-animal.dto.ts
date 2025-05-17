import { IsNumber, IsString, IsArray, IsOptional, IsPositive } from 'class-validator';

export class CreateAnimalDto {
    @IsString()
    nome: string;

    @IsNumber()
    @IsPositive()
    idade: number;

    @IsString()
    sexo: string;

    @IsString()
    raca: string;

    @IsNumber()
    @IsPositive()
    porte: number;

    @IsString()
    temperamento: string;

    @IsArray()
    @IsOptional()
    @IsString({ each: true }) // Garante que cada item do array é uma string
    historico_saude?: string[];

    @IsArray()
    @IsOptional()
    @IsString({ each: true }) // Garante que cada item do array é uma string
    necessidades_especiais?: string[];
}
