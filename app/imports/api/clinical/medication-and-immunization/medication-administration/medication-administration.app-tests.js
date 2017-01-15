/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { MedicationAdministration } from './medication-administration.js';


if (Meteor.isServer) {
  describe('MedicationAdministration', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(MedicationAdministration) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
