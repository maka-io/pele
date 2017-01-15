/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { DocumentManifest } from './document-manifest.js';


if (Meteor.isServer) {
  describe('DocumentManifest', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(DocumentManifest) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
