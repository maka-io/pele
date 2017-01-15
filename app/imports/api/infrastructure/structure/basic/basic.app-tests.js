/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { Basic } from './basic.js';


if (Meteor.isServer) {
  describe('Basic', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(Basic) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
