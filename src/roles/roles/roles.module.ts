import {forwardRef, Module} from '@nestjs/common';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Role} from "./roles.model";
import {User} from "../../users/users.model";
import {UserRoles} from "./user-roles.model";
import {UsersModule} from "../../users/users.module";

@Module({
  controllers: [RolesController],
  providers: [RolesService],
  imports: [
    SequelizeModule.forFeature([Role, User, UserRoles]),
    forwardRef(() => UsersModule),
  ],
  exports: [
    RolesService
  ]
})
export class RolesModule {}
