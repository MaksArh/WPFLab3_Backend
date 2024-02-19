import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {User} from "./users.model";
import {CreateUserDto} from "./dto/createUser.dto";

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private userRepository: typeof User){}

    async createUser(dto: CreateUserDto) {
        console.log(dto)
        const user = await this.userRepository.create(dto);
        return user;
    }

    async login(dto: CreateUserDto) {
        let name = dto.name;
        const user = await this.userRepository.findOne({rejectOnEmpty: undefined, where: {name}});
        if (!user) {
            return false
        } else {
            return true
        }
    }
}
