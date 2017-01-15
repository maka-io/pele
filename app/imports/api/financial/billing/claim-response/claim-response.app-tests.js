/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { ClaimResponse } from './claim-response.js';


if (Meteor.isServer) {
  describe('ClaimResponse', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(ClaimResponse) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
