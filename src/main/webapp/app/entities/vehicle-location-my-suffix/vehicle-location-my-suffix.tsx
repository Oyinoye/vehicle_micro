// removed th id primary key
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './vehicle-location-my-suffix.reducer';
import { IVehicleLocationMySuffix } from 'app/shared/model/vehicle-location-my-suffix.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IVehicleLocationMySuffixProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const VehicleLocationMySuffix = (props: IVehicleLocationMySuffixProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const handleSyncList = () => {
    props.getEntities();
  };

  const { vehicleLocationList, match, loading } = props;
  return (
    <div>
      <h2 id="vehicle-location-my-suffix-heading" data-cy="VehicleLocationHeading">
        <Translate contentKey="maxVehicleApp.vehicleLocation.home.title">Vehicle Locations</Translate>
        <div className="d-flex justify-content-end">
          <Button className="mr-2" color="info" onClick={handleSyncList} disabled={loading}>
            <FontAwesomeIcon icon="sync" spin={loading} />{' '}
            <Translate contentKey="maxVehicleApp.vehicleLocation.home.refreshListLabel">Refresh List</Translate>
          </Button>
          <Link to={`${match.url}/new`} className="btn btn-primary jh-create-entity" id="jh-create-entity" data-cy="entityCreateButton">
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="maxVehicleApp.vehicleLocation.home.createLabel">Create new Vehicle Location</Translate>
          </Link>
        </div>
      </h2>
      <div className="table-responsive">
        {vehicleLocationList && vehicleLocationList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="maxVehicleApp.vehicleLocation.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="maxVehicleApp.vehicleLocation.code">Code</Translate>
                </th>
                <th>
                  <Translate contentKey="maxVehicleApp.vehicleLocation.description">Description</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {vehicleLocationList.map((vehicleLocation, i) => (
                <tr key={`entity-${i}`} data-cy="entityTable">
                  <td>
                    <Button tag={Link} to={`${match.url}/${vehicleLocation.id}`} color="link" size="sm">
                      {vehicleLocation.id}
                    </Button>
                  </td>
                  <td>{vehicleLocation.code}</td>
                  <td>{vehicleLocation.description}</td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${vehicleLocation.id}`} color="info" size="sm" data-cy="entityDetailsButton">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button
                        tag={Link}
                        to={`${match.url}/${vehicleLocation.id}/edit`}
                        color="primary"
                        size="sm"
                        data-cy="entityEditButton"
                      >
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button
                        tag={Link}
                        to={`${match.url}/${vehicleLocation.id}/delete`}
                        color="danger"
                        size="sm"
                        data-cy="entityDeleteButton"
                      >
                        <FontAwesomeIcon icon="trash" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.delete">Delete</Translate>
                        </span>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          !loading && (
            <div className="alert alert-warning">
              <Translate contentKey="maxVehicleApp.vehicleLocation.home.notFound">No Vehicle Locations found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ vehicleLocation }: IRootState) => ({
  vehicleLocationList: vehicleLocation.entities,
  loading: vehicleLocation.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(VehicleLocationMySuffix);
