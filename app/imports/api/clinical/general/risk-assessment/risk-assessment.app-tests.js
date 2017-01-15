/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { RiskAssessment } from './risk-assessment.js';


if (Meteor.isServer) {
  describe('RiskAssessment', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(RiskAssessment) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
