/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { Substance } from './substance.js';


if (Meteor.isServer) {
  describe('Substance', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(Substance) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
