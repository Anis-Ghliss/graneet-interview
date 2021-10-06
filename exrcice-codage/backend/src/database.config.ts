import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export class DatabaseConfig implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  createTypeOrmOptions() {
    // if DB_XXX it will get it from the env var
    // otherwise it will get it from the config file that the
    // app module loaded
    return this.configService.get('db');
  }
}
