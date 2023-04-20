import { OrderInformationDto } from './order-information.dto';
import { OrderItemDto } from './order-item.dto';

export class CreateOrderDto {
  buyerInfo: OrderInformationDto;
  totalAmount: number;
  orderItems: OrderItemDto[];
}
