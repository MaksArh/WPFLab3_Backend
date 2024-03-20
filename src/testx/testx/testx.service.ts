import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Testx} from "./testx.model";
import {CreateTestxDto} from "./dto/create-testx.dto";

@Injectable()
export class TestxService {
    constructor(@InjectModel(Testx) private readonly testRepository: typeof Testx) {}

    async create(dto: CreateTestxDto){
        await this.testRepository.create(dto)
    }

    async getAll(){
        return await this.testRepository.findAll()
    }

    async getOne(participantId: number):Promise<any>{
        const test = await this.testRepository.findOne({ where: { participantId } } as any);
        return test;
    }
}
