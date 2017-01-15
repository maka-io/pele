/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { Person } from './person.js';


if (Meteor.isServer) {
  describe('Person', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(Person) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
