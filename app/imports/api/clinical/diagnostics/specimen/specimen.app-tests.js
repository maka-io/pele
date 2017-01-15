/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { Specimen } from './specimen.js';


if (Meteor.isServer) {
  describe('Specimen', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(Specimen) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
