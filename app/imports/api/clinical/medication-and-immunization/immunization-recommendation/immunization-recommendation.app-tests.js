/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { ImmunizationRecommendation } from './immunization-recommendation.js';


if (Meteor.isServer) {
  describe('ImmunizationRecommendation', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(ImmunizationRecommendation) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
