/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { OrderResponse } from './order-response.js';


if (Meteor.isServer) {
  describe('OrderResponse', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(OrderResponse) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
