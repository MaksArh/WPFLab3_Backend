import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Testx} from "./testx.model";
import {CreateTestxDto} from "./dto/create-testx.dto";

@Injectable()
export class TestxService {
    constructor(@InjectModel(Testx) private readonly testRepository: typeof Testx) {}

    async create(dto: CreateTestxDto){
        try {
            await this.testRepository.create(dto)
        } catch (e) {
            console.log(e)
        }
    }

    async getAll(){
        try {
            return await this.testRepository.findAll()
        } catch (e) {
            console.log(e)
        }
    }

    async getOne(participantId: number):Promise<any>{
        try {
            const test = await this.testRepository.findOne({rejectOnEmpty: undefined, where: { participantId } } );
            return test;
        } catch (e) {
            console.log(e)
        }
    }
}
