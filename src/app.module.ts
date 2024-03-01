import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "./users/users.model";
import {ScheduleModule} from "@nestjs/schedule";

@Module({
  imports: [SequelizeModule.forRoot({
    dialect: 'postgres',
    host: 'postgres-db',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'wpf',
    models: [User],
    autoLoadModels: true
  }),
    ScheduleModule.forRoot(),
    UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
