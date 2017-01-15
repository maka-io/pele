/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { Coverage } from './coverage.js';


if (Meteor.isServer) {
  describe('Coverage', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(Coverage) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
