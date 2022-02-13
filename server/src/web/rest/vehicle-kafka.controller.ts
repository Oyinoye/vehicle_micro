// import { ConsumerService } from './../../service/consumer.service';
// import { OnModuleInit } from '@nestjs/common';
// import { ProducerService } from './../../service/producer.service';
// import {
//     Body,
//     ClassSerializerInterceptor,
//     Controller,
//     Delete,
//     Get,
//     Logger,
//     Param,
//     Post as PostMethod,
//     Put,
//     UseGuards,
//     Req,
//     UseInterceptors,
// } from '@nestjs/common';
// import { ApiBearerAuth, ApiUseTags, ApiResponse, ApiOperation } from '@nestjs/swagger';
// import { VehicleDTO } from '../../service/dto/vehicle-my-suffix.dto';
// import { VehicleService } from '../../service/vehicle-my-suffix.service';
// import { PageRequest, Page } from '../../domain/base/pagination.entity';
// import { AuthGuard, Roles, RolesGuard, RoleType } from '../../security';
// import { HeaderUtil } from '../../client/header-util';
// import { Request } from '../../client/request';
// import { LoggingInterceptor } from '../../client/interceptors/logging.interceptor';

// @Controller('api/vehicle-kafka')
// @UseGuards(AuthGuard, RolesGuard)
// @UseInterceptors(LoggingInterceptor, ClassSerializerInterceptor)
// @ApiBearerAuth()
// @ApiUseTags('vehicle-kafka')
// export class VehicleKafkaController {
//     logger = new Logger('VehicleKafkaController');

//     constructor(private readonly ProducerService: ProducerService, private readonly ConsumerService: ConsumerService) {}

//     @Get('/publish/:topic')
//     @Roles(RoleType.USER)
    
//     async getHello() {
//         await this.ProducerService.produce({
//             topic: 'kafka-test',
//             messages: [
//                 {
//                     value: 'Hello kafka world',
//                 },
//             ],
//         })
//         return 'Hello kafka world!!!';
//     }

//     // @Get('/:id')
//     // @Roles(RoleType.USER)
//     // @ApiResponse({
//     //     status: 200,
//     //     description: 'The found record',
//     //     type: VehicleDTO,
//     // })
//     // async getOne(@Param('id') id: number): Promise<VehicleDTO> {
//     //     return await this.vehicleEntityService.findById(id);
//     }

//     // @PostMethod('/')
//     // @Roles(RoleType.ADMIN)
//     // @ApiOperation({ title: 'Create vehicleEntity' })
//     // @ApiResponse({
//     //     status: 201,
//     //     description: 'The record has been successfully created.',
//     //     type: VehicleDTO,
//     // })
//     // @ApiResponse({ status: 403, description: 'Forbidden.' })
//     // async post(@Req() req: Request, @Body() vehicleEntityDTO: VehicleDTO): Promise<VehicleDTO> {
//     //     const created = await this.vehicleEntityService.save(vehicleEntityDTO, req.user?.login);
//     //     HeaderUtil.addEntityCreatedHeaders(req.res, 'Vehicle', created.id);
//     //     return created;
//     // }

//     @Get('/consume')
//     @Roles(RoleType.ADMIN)
//     @ApiOperation({ title: 'Update vehicleEntity' })
//     async OnModuleInit(@() req: Request, @Body() vehicleEntityDTO: VehicleDTO): Promise<VehicleDTO> {
//         HeaderUtil.addEntityCreatedHeaders(req.res, 'Vehicle', vehicleEntityDTO.id);
//         return await this.vehicleEntityService.update(vehicleEntityDTO, req.user?.login);
//     }

//     @Put('/:id')
//     @Roles(RoleType.ADMIN)
//     @ApiOperation({ title: 'Update vehicleEntity with id' })
//     @ApiResponse({
//         status: 200,
//         description: 'The record has been successfully updated.',
//         type: VehicleDTO,
//     })
//     async putId(@Req() req: Request, @Body() vehicleEntityDTO: VehicleDTO): Promise<VehicleDTO> {
//         HeaderUtil.addEntityCreatedHeaders(req.res, 'Vehicle', vehicleEntityDTO.id);
//         return await this.vehicleEntityService.update(vehicleEntityDTO, req.user?.login);
//     }

//     @Delete('/:id')
//     @Roles(RoleType.ADMIN)
//     @ApiOperation({ title: 'Delete vehicleEntity' })
//     @ApiResponse({
//         status: 204,
//         description: 'The record has been successfully deleted.',
//     })
//     async deleteById(@Req() req: Request, @Param('id') id: number): Promise<void> {
//         HeaderUtil.addEntityDeletedHeaders(req.res, 'Vehicle', id);
//         return await this.vehicleEntityService.deleteById(id);
//     }
// }
