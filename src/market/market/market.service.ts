import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Papers} from "./market.model";
import axios from "axios";



@Injectable()
export class MarketService {
    constructor(@InjectModel(Papers)  private papersRepository: typeof Papers) {}


    async checkTicket(ticket:string){
        const response = await axios.get('`https://iss.moex.com/iss/engines/stock/markets/shares/securities/${ticket}/aggregates.json`');
        return !!response;
    }

    async getPapers(id: number){
        return this.papersRepository.findAll({where:{portfolioId:id}})
    }
    async addPaper(paper: Papers){
        await this.papersRepository.create(paper)
    }
    async getMarket(){
        const response = await axios.get('https://iss.moex.com/iss/engines/stock/markets/shares/securities/aggregates.json');
        const data = response.data;
        return data;
    }

}
