/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { ClinicalImpression } from './clinical-impression.js';


if (Meteor.isServer) {
  describe('ClinicalImpression', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(ClinicalImpression) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
