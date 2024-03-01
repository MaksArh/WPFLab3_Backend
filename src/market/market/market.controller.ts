import {Controller, Get, Param} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {MarketService} from "./market.service";

@Controller('market')
export class MarketController {
    constructor(private readonly marketService: MarketService) {
    }

    @Get('check/{ticket}')
    async checkTicket(@Param() params){
        return await this.marketService.checkTicket(params.ticket)
    }

    @Get()
    async getMarket(){
        return await this.marketService.getMarket()
    }
}
