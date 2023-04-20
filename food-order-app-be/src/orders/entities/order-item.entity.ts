import { Dish } from '../../dishes/entities/dish.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Order } from './order.entity';

@Entity()
export class OrderItem {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  quantity: number;

  @ManyToOne(() => Dish, (dish) => dish.orderItems)
  dish: Dish;

  @ManyToOne(() => Order, (order) => order.orderItems)
  order: Order;
}
