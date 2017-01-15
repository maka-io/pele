/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { SearchParameter } from './search-parameter.js';


if (Meteor.isServer) {
  describe('SearchParameter', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(SearchParameter) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
