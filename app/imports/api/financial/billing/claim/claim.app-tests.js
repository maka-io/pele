/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { Claim } from './claim.js';


if (Meteor.isServer) {
  describe('Claim', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(Claim) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
