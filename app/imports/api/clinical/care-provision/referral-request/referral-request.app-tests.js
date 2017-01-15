/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { ReferralRequest } from './referral-request.js';


if (Meteor.isServer) {
  describe('ReferralRequest', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(ReferralRequest) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
