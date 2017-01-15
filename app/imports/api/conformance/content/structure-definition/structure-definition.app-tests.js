/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { StructureDefinition } from './structure-definition.js';


if (Meteor.isServer) {
  describe('StructureDefinition', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(StructureDefinition) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
