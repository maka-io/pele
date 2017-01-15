/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { Organization } from './organization.js';


if (Meteor.isServer) {
  describe('Organization', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(Organization) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
