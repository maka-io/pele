/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { EnrollmentRequest } from './enrollment-request.js';


if (Meteor.isServer) {
  describe('EnrollmentRequest', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(EnrollmentRequest) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
