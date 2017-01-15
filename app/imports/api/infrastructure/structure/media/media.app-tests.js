/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { Media } from './media.js';


if (Meteor.isServer) {
  describe('Media', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(Media) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
