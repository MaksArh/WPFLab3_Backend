import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "./users.model";
import {RolesModule} from "../roles/roles/roles.module";
import {UserRoles} from "../roles/roles/user-roles.model";
import {Role} from "../roles/roles/roles.model";

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    SequelizeModule.forFeature([User, Role, UserRoles]),
    RolesModule,
  ],
})
export class UsersModule {}
