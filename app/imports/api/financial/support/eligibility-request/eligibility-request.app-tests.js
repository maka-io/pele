/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { EligibilityRequest } from './eligibility-request.js';


if (Meteor.isServer) {
  describe('EligibilityRequest', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(EligibilityRequest) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
