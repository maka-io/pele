/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { ProcessResponse } from './process-response.js';


if (Meteor.isServer) {
  describe('ProcessResponse', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(ProcessResponse) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
