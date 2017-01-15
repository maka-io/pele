/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { TestScript } from './test-script.js';


if (Meteor.isServer) {
  describe('TestScript', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(TestScript) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
