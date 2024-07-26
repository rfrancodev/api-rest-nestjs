import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class CarsService {
  constructor(private readonly prisma: PrismaService){}

  async create(createCarDto: CreateCarDto) {
    const newCar = {
      brand: createCarDto.brand,
      model: createCarDto.model,
      year: createCarDto.year,
    }
    return await this.prisma.car.create({
      data: newCar,
    })

  }

  async findAll() {
    return await this.prisma.car.findMany();
  }

  async findOne(id: number) {
    const car = await this.prisma.car.findFirst({
      where: {
        id,
      },
    })
    
    if (!car) {
      throw new NotFoundException('Carro não encontrado')
    }
    return car;
  }

  async update(id: number, updateCarDto: UpdateCarDto) {
    await this.findOne(id)
  
    const updatedCar = await this.prisma.car.update({
        where: {
          id,
        },
        data: updateCarDto,
    })
  
    return updatedCar;
  }
  
  async remove(id: number) {
    await this.findOne(id)
  
    const deletedCar = await this.prisma.car.delete({
      where: {
        id,
      },
    });
  
    return deletedCar;
  }
  
};
