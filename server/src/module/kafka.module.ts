import { UserRegisteredConsumer } from './../service/user-registered.consumer';
import { ConsumerService } from './../service/consumer.service';
import { ProducerService } from './../service/producer.service';
import { Module } from '@nestjs/common';

@Module({
    providers: [ProducerService, ConsumerService, UserRegisteredConsumer],
    exports: [ProducerService, ConsumerService],
})
export class KafkaModule {}
 