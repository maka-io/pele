/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { ImagingObjectSelection } from './imaging-object-selection.js';


if (Meteor.isServer) {
  describe('ImagingObjectSelection', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(ImagingObjectSelection) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
