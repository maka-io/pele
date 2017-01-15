/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { ConceptMap } from './concept-map.js';


if (Meteor.isServer) {
  describe('ConceptMap', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(ConceptMap) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
