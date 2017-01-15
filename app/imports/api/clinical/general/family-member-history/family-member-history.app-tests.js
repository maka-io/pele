/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { FamilyMemberHistory } from './family-member-history.js';


if (Meteor.isServer) {
  describe('FamilyMemberHistory', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(FamilyMemberHistory) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
