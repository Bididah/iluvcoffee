import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
  constructor(private coffeeService: CoffeesService) {}
  @Get()
  findAll(@Query() paginationQuery) {
    console.log(paginationQuery);
    return this.coffeeService.all();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `id of the coffee id ${id}`;
  }

  @Post()
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    return createCoffeeDto;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    return `This methode update the coffee #${id} and ${updateCoffeeDto}`;
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return `This methode removes the coffee #${id} `;
  }
}
