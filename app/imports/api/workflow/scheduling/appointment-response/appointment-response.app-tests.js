/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { AppointmentResponse } from './appointment-response.js';


if (Meteor.isServer) {
  describe('AppointmentResponse', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(AppointmentResponse) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
