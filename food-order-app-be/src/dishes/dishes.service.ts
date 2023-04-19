import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateDishDto } from './dto/create-dish.dto';
import { UpdateDishDto } from './dto/update-dish.dto';
import { Dish } from './entities/dish.entity';

@Injectable()
export class DishesService {
  constructor(
    @InjectRepository(Dish) private readonly dishRepository: Repository<Dish>,
  ) {}

  create(createDishDto: CreateDishDto) {
    const dish = this.dishRepository.create(createDishDto);
    return this.dishRepository.save(dish);
  }

  findAll() {
    return this.dishRepository.find();
  }

  findOne(id: number) {
    const dish = this.dishRepository.findOne({ where: { id } });
    if (!dish) {
      throw new NotFoundException('The requested dish does not exist');
    }
    return dish;
  }

  async update(id: number, updateDishDto: UpdateDishDto) {
    const dish = await this.findOne(id);
    Object.assign(dish, updateDishDto);
    return this.dishRepository.save(dish);
  }

  async remove(id: number) {
    const dish = await this.findOne(id);
    return this.dishRepository.remove(dish);
  }
}
