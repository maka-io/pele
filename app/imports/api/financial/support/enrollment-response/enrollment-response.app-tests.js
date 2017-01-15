/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { EnrollmentResponse } from './enrollment-response.js';


if (Meteor.isServer) {
  describe('EnrollmentResponse', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(EnrollmentResponse) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
