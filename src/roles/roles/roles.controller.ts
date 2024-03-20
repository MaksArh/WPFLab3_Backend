import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {RolesService} from "./roles.service";
import {CreateRoleDto} from "./dto/create-role.dto";
import {Role} from "./roles.model";

@Controller('roles')
export class RolesController {
    constructor (private readonly roleService: RolesService) {
    }

    @Post()
    async create (@Body() dto: CreateRoleDto): Promise<Role> {
        return await this.roleService.createRole(dto);
    }

    @Get('/:value')
    async getByValue (@Param('value') value: string): Promise<Role> {
        return await this.roleService.getRoleByValue(value);
    }
}
