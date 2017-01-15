/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { Binary } from './binary.js';


if (Meteor.isServer) {
  describe('Binary', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(Binary) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
