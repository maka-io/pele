/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { Medication } from './medication.js';


if (Meteor.isServer) {
  describe('Medication', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(Medication) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
