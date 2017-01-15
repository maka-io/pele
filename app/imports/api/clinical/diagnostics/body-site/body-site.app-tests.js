/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { BodySite } from './body-site.js';


if (Meteor.isServer) {
  describe('BodySite', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(BodySite) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
