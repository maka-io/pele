/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { Conformance } from './conformance.js';


if (Meteor.isServer) {
  describe('Conformance', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(Conformance) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
