/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { HealthcareService } from './healthcare-service.js';


if (Meteor.isServer) {
  describe('HealthcareService', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(HealthcareService) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
