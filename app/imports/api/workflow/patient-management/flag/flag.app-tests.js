/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { Flag } from './flag.js';


if (Meteor.isServer) {
  describe('Flag', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(Flag) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
