/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { VisionPrescription } from './vision-prescription.js';


if (Meteor.isServer) {
  describe('VisionPrescription', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(VisionPrescription) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
