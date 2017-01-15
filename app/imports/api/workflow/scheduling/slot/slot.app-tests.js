/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { Slot } from './slot.js';


if (Meteor.isServer) {
  describe('Slot', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(Slot) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
