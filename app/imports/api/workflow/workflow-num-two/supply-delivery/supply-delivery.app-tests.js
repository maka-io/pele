/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { SupplyDelivery } from './supply-delivery.js';


if (Meteor.isServer) {
  describe('SupplyDelivery', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(SupplyDelivery) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
