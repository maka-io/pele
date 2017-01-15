/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { DocumentReference } from './document-reference.js';


if (Meteor.isServer) {
  describe('DocumentReference', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(DocumentReference) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
