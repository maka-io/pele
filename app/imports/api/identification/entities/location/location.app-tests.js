/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { Location } from './location.js';


if (Meteor.isServer) {
  describe('Location', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(Location) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
