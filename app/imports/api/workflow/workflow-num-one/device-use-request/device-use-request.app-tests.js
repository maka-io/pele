/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { DeviceUseRequest } from './device-use-request.js';


if (Meteor.isServer) {
  describe('DeviceUseRequest', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(DeviceUseRequest) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
