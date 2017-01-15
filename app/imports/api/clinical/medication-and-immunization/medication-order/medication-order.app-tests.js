/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { MedicationOrder } from './medication-order.js';


if (Meteor.isServer) {
  describe('MedicationOrder', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(MedicationOrder) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
