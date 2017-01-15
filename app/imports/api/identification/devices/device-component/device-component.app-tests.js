/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { DeviceComponent } from './device-component.js';


if (Meteor.isServer) {
  describe('DeviceComponent', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(DeviceComponent) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
