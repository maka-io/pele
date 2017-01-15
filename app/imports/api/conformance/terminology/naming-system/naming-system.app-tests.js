/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { NamingSystem } from './naming-system.js';


if (Meteor.isServer) {
  describe('NamingSystem', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(NamingSystem) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
