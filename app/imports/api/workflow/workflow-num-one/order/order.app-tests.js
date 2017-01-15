/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { Order } from './order.js';


if (Meteor.isServer) {
  describe('Order', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(Order) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
