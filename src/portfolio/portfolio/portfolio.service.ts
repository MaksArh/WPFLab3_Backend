import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Portfolio} from "./portfolio.model";
import {Papers} from "../../market/market/market.model";

@Injectable()
export class PortfolioService {
    constructor(@InjectModel(Portfolio) private portfolioRepository: typeof Portfolio,
                @InjectModel(Papers) private papersRepository: typeof Papers) {}

    async createPortfolio(portfolio: Portfolio){
        await this.portfolioRepository.create(portfolio)
    }

    async getUserPortfolios(userId: number){
        return await this.portfolioRepository.findAll({where:{userId:userId}})
    }

    async getOnePortfolio(portfolioId:number){
        return await this.papersRepository.findAll({where:{portfolioId:portfolioId}})
    }

    async addPaperToPortfolio(paper:Papers){
        await this.papersRepository.create(Papers)
    }
}
