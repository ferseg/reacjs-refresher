import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DishesModule } from './dishes/dishes.module';
import { Dish } from './dishes/entities/dish.entity';
import { BuyerInformation } from './orders/entities/buyer-information.entity';
import { OrderItem } from './orders/entities/order-item.entity';
import { Order } from './orders/entities/order.entity';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    DishesModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'fooddb.sqlite',
      entities: [Dish, OrderItem, Order, BuyerInformation],
      synchronize: true,
    }),
    OrdersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
