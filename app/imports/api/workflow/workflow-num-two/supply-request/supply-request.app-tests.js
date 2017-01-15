/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { SupplyRequest } from './supply-request.js';


if (Meteor.isServer) {
  describe('SupplyRequest', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(SupplyRequest) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
