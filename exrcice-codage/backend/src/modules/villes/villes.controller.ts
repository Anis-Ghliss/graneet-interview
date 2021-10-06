import { Controller, Get, Param } from '@nestjs/common';
import { Villes } from 'src/entities/villes.entity';
import { VillesService } from './villes.service';

@Controller('villes')
export class VillesController {
  constructor(private readonly villeService: VillesService) {}

  @Get()
  async getAllVilles(): Promise<Villes[]> {
    return await this.villeService.getAll();
  }

  @Get('/code/:code')
  async getByCode(@Param('code') code: number): Promise<any> {
    return this.villeService.getByCode(code);
  }

  @Get('/name/:name')
  async getByName(@Param('name') name: string): Promise<any> {
    return this.villeService.getByName(name);
  }
}
