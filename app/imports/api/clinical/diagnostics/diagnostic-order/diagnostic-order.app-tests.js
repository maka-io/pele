/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { DiagnosticOrder } from './diagnostic-order.js';


if (Meteor.isServer) {
  describe('DiagnosticOrder', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(DiagnosticOrder) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
