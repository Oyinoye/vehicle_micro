import { VehicleRepository } from './../repository/vehicle-my-suffix.repository';
import { ConsumerService } from './consumer.service';

import { Injectable, OnModuleInit } from '@nestjs/common';
import { getManager } from 'typeorm';

@Injectable()
export class UserRegisteredConsumer implements OnModuleInit {
    constructor( private readonly consumerService: ConsumerService) {}

    async onModuleInit() {
        const manager = getManager();
        const connection = manager.connection;
        const repository = connection.getRepository(VehicleRepository)
        await this.consumerService.consume({ topic: 'ChampionStateChanged' }, {
            eachMessage: async ({ topic, partition, message}) => {
                console.log({
                    value: message.value.toString(),
                    topic: topic.toString(),
                    partition: partition.toString(),
                });
               
                // const saved_message = JSON.parse(message.value.toString())
                // eventCommandEntityDTO.championID = saved_message["championID"];
                // eventCommandEntityDTO.eventDateTime = saved_message["lastModifiedDate"];
                // eventCommandEntityDTO.event = saved_message["status"];
                // eventCommandEntityDTO.eventPayload = JSON.stringify(saved_message);
                // eventCommandEntityDTO.createdBy = saved_message["createdBy"];
                // eventCommandEntityDTO.lastModifiedBy = saved_message["lastModifiedBy"];
                // eventCommandEntityDTO.lastModifiedDate = saved_message["lastModifiedDate"];

                // const created = await repository.save(eventCommandEntityDTO)
                // console.log(created)
            }
        });

        
        
    }
}

