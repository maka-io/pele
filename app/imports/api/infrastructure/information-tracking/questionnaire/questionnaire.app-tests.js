/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { Questionnaire } from './questionnaire.js';


if (Meteor.isServer) {
  describe('Questionnaire', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(Questionnaire) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
