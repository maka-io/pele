/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { Provenanace } from './provenanace.js';


if (Meteor.isServer) {
  describe('Provenanace', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(Provenanace) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
