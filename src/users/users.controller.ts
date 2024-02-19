import {Body, Controller, Get, Post} from '@nestjs/common';
import {UsersService} from "./users.service";
import {CreateUserDto} from "./dto/createUser.dto";

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Post("register")
    register(@Body() userDto: CreateUserDto){
        return this.usersService.createUser(userDto)
    }

    @Post()
    login(@Body() userDto: CreateUserDto){
        return this.usersService.login(userDto);
    }

}
