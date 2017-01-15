/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { ImplementationGuide } from './implementation-guide.js';


if (Meteor.isServer) {
  describe('ImplementationGuide', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(ImplementationGuide) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
