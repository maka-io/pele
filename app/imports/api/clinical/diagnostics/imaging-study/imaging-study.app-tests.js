/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { ImagingStudy } from './imaging-study.js';


if (Meteor.isServer) {
  describe('ImagingStudy', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(ImagingStudy) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
