import { Body, Controller, Param, Patch, Post } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { GenericController } from 'util/generic.controller';
import { Coffee } from './entities/coffee.entity';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController extends GenericController<Coffee> {
  constructor(private coffeeService: CoffeesService) {
    super(coffeeService);
  }

  @Post('/:id')
  create(@Body() createCoffeeDto: CreateCoffeeDto): Promise<Coffee> {
    return super.create(createCoffeeDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCoffeeDto: UpdateCoffeeDto,
  ): Promise<Coffee> {
    return super.update(id, updateCoffeeDto);
  }
}
