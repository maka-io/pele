/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { MedicationDispense } from './medication-dispense.js';


if (Meteor.isServer) {
  describe('MedicationDispense', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(MedicationDispense) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
