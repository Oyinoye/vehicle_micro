import React from 'react';
import MenuItem from 'app/shared/layout/menus/menu-item';
import { Translate, translate } from 'react-jhipster';
import { NavDropdown } from './menu-components';

export const EntitiesMenu = props => (
  <NavDropdown
    icon="th-list"
    name={translate('global.menu.entities.main')}
    id="entity-menu"
    data-cy="entity"
    style={{ maxHeight: '80vh', overflow: 'auto' }}
  >
    <MenuItem icon="asterisk" to="/vehicle-my-suffix">
      <Translate contentKey="global.menu.entities.vehicleMySuffix" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/vehicle-type-my-suffix">
      <Translate contentKey="global.menu.entities.vehicleTypeMySuffix" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/vehicle-location-my-suffix">
      <Translate contentKey="global.menu.entities.vehicleLocationMySuffix" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/manufacturer-my-suffix">
      <Translate contentKey="global.menu.entities.manufacturerMySuffix" />
    </MenuItem>
    {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
  </NavDropdown>
);
