/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { MedicationStatement } from './medication-statement.js';


if (Meteor.isServer) {
  describe('MedicationStatement', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(MedicationStatement) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
