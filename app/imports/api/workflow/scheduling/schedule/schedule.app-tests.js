/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { Schedule } from './schedule.js';


if (Meteor.isServer) {
  describe('Schedule', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(Schedule) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
