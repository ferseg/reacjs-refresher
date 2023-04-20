import { OrderItem } from '../../orders/entities/order-item.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Dish {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column()
  price: number;

  @OneToMany(() => OrderItem, (orderItem) => orderItem.dish)
  orderItems: OrderItem[];
}
