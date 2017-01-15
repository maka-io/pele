/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { EligibilityResponse } from './eligibility-response.js';


if (Meteor.isServer) {
  describe('EligibilityResponse', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(EligibilityResponse) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
