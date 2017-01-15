/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { Group } from './group.js';


if (Meteor.isServer) {
  describe('Group', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(Group) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
