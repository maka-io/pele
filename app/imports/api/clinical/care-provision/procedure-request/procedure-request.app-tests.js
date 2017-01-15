/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { ProcedureRequest } from './procedure-request.js';


if (Meteor.isServer) {
  describe('ProcedureRequest', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(ProcedureRequest) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
