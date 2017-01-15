/* eslint-env jasmine */

import { Meteor } from 'meteor/meteor';
import { QuestionnaireResponse } from './questionnaire-response.js';


if (Meteor.isServer) {
  describe('QuestionnaireResponse', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(QuestionnaireResponse) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });
}
