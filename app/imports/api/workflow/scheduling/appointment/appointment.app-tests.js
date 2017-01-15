/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { Appointment } from './appointment.js';


if (Meteor.isServer) {
  describe('Appointment', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(Appointment) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
