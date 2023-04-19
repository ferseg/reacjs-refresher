import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DishesModule } from './dishes/dishes.module';
import { Dish } from './dishes/entities/dish.entity';

@Module({
  imports: [
    DishesModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'fooddb.sqlite',
      entities: [Dish],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
