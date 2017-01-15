/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { Patient } from './patient.js';


if (Meteor.isServer) {
  describe('Patient', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(Patient) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
