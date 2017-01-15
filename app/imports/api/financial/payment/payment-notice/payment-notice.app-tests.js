/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { PaymentNotice } from './payment-notice.js';


if (Meteor.isServer) {
  describe('PaymentNotice', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(PaymentNotice) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
