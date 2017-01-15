/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { Subscription } from './subscription.js';


if (Meteor.isServer) {
  describe('Subscription', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(Subscription) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
