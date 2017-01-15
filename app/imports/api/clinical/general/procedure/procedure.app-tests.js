/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { Procedure } from './procedure.js';


if (Meteor.isServer) {
  describe('Procedure', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(Procedure) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
