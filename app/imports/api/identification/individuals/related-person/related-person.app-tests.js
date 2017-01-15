/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { RelatedPerson } from './related-person.js';


if (Meteor.isServer) {
  describe('RelatedPerson', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(RelatedPerson) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
