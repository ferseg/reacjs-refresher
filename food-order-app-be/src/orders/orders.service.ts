import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DishesService } from '../dishes/dishes.service';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrderItem } from './entities/order-item.entity';
import { Order } from './entities/order.entity';
import { BuyerInformation } from './entities/buyer-information.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
    @InjectRepository(BuyerInformation)
    private readonly buyerInfoRepo: Repository<BuyerInformation>,
    private readonly dishService: DishesService,
  ) {}

  async create(createOrderDto: CreateOrderDto) {
    console.log(createOrderDto);
    const dishesId = createOrderDto.orderItems.map((item) => item.id);
    const dishes = await this.dishService.getDishes(dishesId);
    const orderItems = createOrderDto.orderItems.map((item) => {
      const orderItem = {
        dish: dishes[item.id],
        quantity: item.quantity,
      };
      return orderItem;
    });
    // NOTE: Intentionally leaving this just for create, but it should look for the buyer in the database and use it
    const buyerInformation = this.buyerInfoRepo.create(
      createOrderDto.buyerInfo,
    );
    const order = {
      totalAmount: orderItems.reduce(
        (currentAmount: number, orderItem: OrderItem) => {
          const totalByDish = orderItem.dish.price * orderItem.quantity;
          return totalByDish + currentAmount;
        },
        0,
      ),
      orderItems,
      buyerInformation: await this.buyerInfoRepo.save(buyerInformation),
    };
    return this.orderRepository.save(order);
  }

  findAll() {
    return `This action returns all orders`;
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
