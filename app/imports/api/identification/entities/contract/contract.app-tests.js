/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { Contract } from './contract.js';


if (Meteor.isServer) {
  describe('Contract', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(Contract) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
