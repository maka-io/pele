/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { Observation } from './observation.js';


if (Meteor.isServer) {
  describe('Observation', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(Observation) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
