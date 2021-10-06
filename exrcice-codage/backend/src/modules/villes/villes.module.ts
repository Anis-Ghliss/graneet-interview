import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Villes } from 'src/entities/villes.entity';
import { VillesController } from './villes.controller';
import { VillesService } from './villes.service';

@Module({
  imports: [TypeOrmModule.forFeature([Villes])],
  providers: [VillesService],
  controllers: [VillesController],
})
export class VillesModule {}
