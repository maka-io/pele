/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { Bundle } from './bundle.js';


if (Meteor.isServer) {
  describe('Bundle', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(Bundle) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
