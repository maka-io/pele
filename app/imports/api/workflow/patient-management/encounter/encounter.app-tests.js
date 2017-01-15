/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { Encounter } from './encounter.js';


if (Meteor.isServer) {
  describe('Encounter', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(Encounter) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
