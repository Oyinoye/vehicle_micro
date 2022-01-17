/* eslint-disable @typescript-eslint/no-unused-vars */
import { ApiModelProperty } from '@nestjs/swagger';
import { BaseDTO } from './base.dto';

/**
 * A VehicleLocationDTO object.
 */
export class VehicleLocationDTO extends BaseDTO {
    @ApiModelProperty({ description: 'code field', required: false })
    code: string;

    @ApiModelProperty({ description: 'description field', required: false })
    description: string;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
}
