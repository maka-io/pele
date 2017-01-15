/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { ValueSet } from './value-set.js';


if (Meteor.isServer) {
  describe('ValueSet', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(ValueSet) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
