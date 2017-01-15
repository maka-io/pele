/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { Communication } from './communication.js';


if (Meteor.isServer) {
  describe('Communication', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(Communication) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
