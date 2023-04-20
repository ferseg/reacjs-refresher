import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderItem } from './entities/order-item.entity';
import { Order } from './entities/order.entity';
import { DishesModule } from '../dishes/dishes.module';
import { BuyerInformation } from './entities/buyer-information.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Order, OrderItem, BuyerInformation]),
    DishesModule,
  ],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
