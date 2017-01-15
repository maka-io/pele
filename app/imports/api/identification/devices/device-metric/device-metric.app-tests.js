/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { DeviceMetric } from './device-metric.js';


if (Meteor.isServer) {
  describe('DeviceMetric', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(DeviceMetric) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
