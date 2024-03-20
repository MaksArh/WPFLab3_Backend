import {Body, Controller, Get, Param, ParseIntPipe, Post} from '@nestjs/common';
import {TestxService} from "./testx.service";
import {CreateTestxDto} from "./dto/create-testx.dto";

@Controller('testx')
export class TestxController {
    constructor(private readonly testxService: TestxService) {}
    @Post()
    async create(@Body() createTestxDto: CreateTestxDto) {
        await this.testxService.create(createTestxDto);
    }

    @Get()
    async getAll() {
        return this.testxService.getAll();
    }

    @Get(':participantId')
    async getOne(@Param('participantId', ParseIntPipe) participantId: number) {
        return this.testxService.getOne(participantId);
    }
}
