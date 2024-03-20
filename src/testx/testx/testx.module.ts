import { Module } from '@nestjs/common';
import { TestxController } from './testx.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {Testx} from "./testx.model";

@Module({
  controllers: [TestxController],
  imports: [
    SequelizeModule.forFeature([Testx])
  ]
})
export class TestxModule {}
