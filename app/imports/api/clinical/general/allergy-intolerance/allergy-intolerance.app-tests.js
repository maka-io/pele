/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { AllergyIntolerance } from './allergy-intolerance.js';


if (Meteor.isServer) {
  describe('AllergyIntolerance', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(AllergyIntolerance) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
