import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {PortfolioService} from "./portfolio.service";
import {Papers} from "../../market/market/market.model";
import {Portfolio} from "./portfolio.model";

@Controller('portfolio')
export class PortfolioController {
    constructor(private readonly portfolioService: PortfolioService) {}

    @Get('list')
    async getListPapers(@Param() params){
        return await this.portfolioService.getOnePortfolio(params.portfolioId)
    }

    @Post('list')
    async getList(@Body() body){
        return await this.portfolioService.addPaperToPortfolio(body.paper as Papers)
    }

    @Get('{userId}')
    async getList(@Param() params){
        return await this.portfolioService.getUserPortfolios(params.userId)
    }

    @Post('')
    async createPortfolio(@Body() body){
        return await this.portfolioService.createPortfolio(body.portfolio as Portfolio)
    }
}