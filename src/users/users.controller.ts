import {Body, Controller, Get, Post} from '@nestjs/common';
import {UsersService} from "./users.service";
import {CreateUserDto} from "./dto/createUser.dto";
import {AddRoleDto} from "./dto/add-role.dto";
import {User} from "./users.model";

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Post("register")
    register(@Body() userDto: CreateUserDto){
        return this.usersService.createUser(userDto)
    }

    @Post('role')
    async addRole (@Body() dto: AddRoleDto): Promise<User> {
        return await this.usersService.addRole(dto);
    }

    @Post()
    login(@Body() userDto: CreateUserDto){
        return this.usersService.login(userDto);
    }

}
