import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { config } from './config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfig } from './database.config';
import { VillesModule } from './modules/villes/villes.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config], // load config before app starts
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: DatabaseConfig,
    }),
    VillesModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
