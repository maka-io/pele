/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { Immunization } from './immunization.js';


if (Meteor.isServer) {
  describe('Immunization', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(Immunization) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
