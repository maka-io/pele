/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { ExplanationOfBenefit } from './explanation-of-benefit.js';


if (Meteor.isServer) {
  describe('ExplanationOfBenefit', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(ExplanationOfBenefit) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
