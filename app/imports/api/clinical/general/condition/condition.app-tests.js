/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { Condition } from './condition.js';


if (Meteor.isServer) {
  describe('Condition', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(Condition) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
