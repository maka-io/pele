/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { Parameters } from './parameters.js';


if (Meteor.isServer) {
  describe('Parameters', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(Parameters) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
