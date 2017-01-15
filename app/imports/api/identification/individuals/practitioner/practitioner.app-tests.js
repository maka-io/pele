/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { Practitioner } from './practitioner.js';


if (Meteor.isServer) {
  describe('Practitioner', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(Practitioner) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
