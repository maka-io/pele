/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { DeviceUseStatement } from './device-use-statement.js';


if (Meteor.isServer) {
  describe('DeviceUseStatement', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(DeviceUseStatement) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
