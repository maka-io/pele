/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { NutritionOrder } from './nutrition-order.js';


if (Meteor.isServer) {
  describe('NutritionOrder', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(NutritionOrder) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
