/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { OperationDefinition } from './operation-definition.js';


if (Meteor.isServer) {
  describe('OperationDefinition', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(OperationDefinition) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
