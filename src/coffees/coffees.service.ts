import { Injectable } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';

import { CrudService } from 'util/crud-service';

@Injectable()
export class CoffeesService extends CrudService<Coffee> {
  constructor(
    @InjectRepository(Coffee) private repo: Repository<Coffee>,
    @InjectDataSource() private data: DataSource,
  ) {
    super(repo, data);
  }
}
