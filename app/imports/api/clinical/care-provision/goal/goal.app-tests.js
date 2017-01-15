/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { Goal } from './goal.js';


if (Meteor.isServer) {
  describe('Goal', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(Goal) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
