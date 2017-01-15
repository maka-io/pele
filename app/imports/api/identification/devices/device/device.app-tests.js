/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { Device } from './device.js';


if (Meteor.isServer) {
  describe('Device', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(Device) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
