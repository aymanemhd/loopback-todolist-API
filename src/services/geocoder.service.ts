import {inject, Provider} from '@loopback/core';
import {getService} from '@loopback/service-proxy';
import {GeocoderDataSource} from '../datasources';

export interface GeiPount {
  /**
   * latiyude
   */
  y: number;
  /**
   * latiyude
   */
  x: number;
}

export interface Geocoder {
  geocode(address: string): Promise<GeiPount[]>;
}

export class GeocoderProvider implements Provider<Geocoder> {
  constructor(
    // geocoder must match the name property in the datasource json file
    @inject('datasources.geocoder')
    protected dataSource: GeocoderDataSource = new GeocoderDataSource(),
  ) {}

  value(): Promise<Geocoder> {
    return getService(this.dataSource);
  }
}
