/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { ProcessRequest } from './process-request.js';


if (Meteor.isServer) {
  describe('ProcessRequest', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(ProcessRequest) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
