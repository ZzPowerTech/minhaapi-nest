import { Injectable } from '@nestjs/common';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { Animal } from './entities/animal.entity';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class AnimalService {
  constructor(private prisma: PrismaService) {}

  private mapToEntity(animal: any): Animal {
    return {
      id: animal.id,
      nome: animal.nome,
      idade: animal.idade,
      sexo: animal.sexo,
      raca: animal.raca,
      porte: animal.porte,
      temperamento: animal.temperamento,
      historico_saude: animal.historico_saude,
      necessidades_especiais: animal.necessidades_especiais,
    };
  }

  async create(createAnimalDto: CreateAnimalDto): Promise<Animal> {
    const animal = await this.prisma.animal.create({
      data: {
        nome: createAnimalDto.nome,
        idade: createAnimalDto.idade,
        sexo: createAnimalDto.sexo,
        raca: createAnimalDto.raca,
        porte: createAnimalDto.porte,
        temperamento: createAnimalDto.temperamento,
        historico_saude: createAnimalDto.historico_saude,
        necessidades_especiais: createAnimalDto.necessidades_especiais,
      },
    });
    return this.mapToEntity(animal);
  }

  async findAll(): Promise<Animal[]> {
    const animal = await this.prisma.animal.findMany();
    return animal.map((animal) => this.mapToEntity(animal));
  }

  async findOne(id: String) {
    const animal = await this.prisma.animal.findMany({
      where: { id: id.toString() },
    });
    return animal.map((animal) => this.mapToEntity(animal));
  }

  async update(id: String, updateAnimalDto: UpdateAnimalDto): Promise<Animal> {
    const animal = await this.prisma.animal.update({
      where: { id: id.toString() },
      data: {
        nome: updateAnimalDto.nome,
        idade: updateAnimalDto.idade,
        sexo: updateAnimalDto.sexo,
        raca: updateAnimalDto.raca,
        porte: updateAnimalDto.porte,
        temperamento: updateAnimalDto.temperamento,
        historico_saude: updateAnimalDto.historico_saude,
        necessidades_especiais: updateAnimalDto.necessidades_especiais,
      },
    });
    return this.mapToEntity(animal);
  }

  async remove(id: String): Promise<Animal> {
    console.log(`Animal deletado com o id: ${id}`);
    const animal = await this.prisma.animal.delete({
      where: { id: id.toString() },
    });
    console.log(`Animal deleteado: ${JSON.stringify(animal)}`);
    return this.mapToEntity(animal);
  }
}
