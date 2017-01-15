/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { List } from './list.js';


if (Meteor.isServer) {
  describe('List', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(List) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
