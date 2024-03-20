import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {User} from "./users.model";
import {CreateUserDto} from "./dto/createUser.dto";
import {AddRoleDto} from "./dto/add-role.dto";
import {RolesService} from "../roles/roles/roles.service";

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private userRepository: typeof User,
                private readonly roleService: RolesService){}

    async createUser(dto: CreateUserDto) {
        console.log(dto)
        const user = await this.userRepository.create(dto);
        return user;
    }

    async addRole(dto: AddRoleDto): Promise<User> {
        const user = await this.userRepository.findByPk(dto.userId);
        const role = await this.roleService.getRoleByValue(dto.value);

        if (!role || !user) {
            throw new NotFoundException('User or Role not found');
        }

        await user.$add('role', role.id);
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
