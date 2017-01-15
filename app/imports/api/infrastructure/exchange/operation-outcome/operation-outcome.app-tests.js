/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { OperationOutcome } from './operation-outcome.js';


if (Meteor.isServer) {
  describe('OperationOutcome', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(OperationOutcome) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
