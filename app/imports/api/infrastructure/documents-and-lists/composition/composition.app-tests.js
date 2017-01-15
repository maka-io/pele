/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { Composition } from './composition.js';


if (Meteor.isServer) {
  describe('Composition', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(Composition) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
