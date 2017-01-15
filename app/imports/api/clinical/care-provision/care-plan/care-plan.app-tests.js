/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { CarePlan } from './care-plan.js';


if (Meteor.isServer) {
  describe('CarePlan', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(CarePlan) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
