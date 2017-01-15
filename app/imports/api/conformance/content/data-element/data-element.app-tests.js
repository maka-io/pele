/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { DataElement } from './data-element.js';


if (Meteor.isServer) {
  describe('DataElement', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(DataElement) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
