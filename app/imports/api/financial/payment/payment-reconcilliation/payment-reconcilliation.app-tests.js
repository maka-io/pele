/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { PaymentReconcilliation } from './payment-reconcilliation.js';


if (Meteor.isServer) {
  describe('PaymentReconcilliation', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(PaymentReconcilliation) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
