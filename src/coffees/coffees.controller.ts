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
  create(@Body() body) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `This methode update the coffee #${id} and ${body}`;
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return `This methode removes the coffee #${id} `;
  }
}
